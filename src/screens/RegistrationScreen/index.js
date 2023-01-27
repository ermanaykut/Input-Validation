import {
  Alert,
  Keyboard,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegistrationScreen = ({navigation}) => {

  const [inputs, setInputs] = useState({
    email: '',
    fullname: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading]= useState(false)
  
  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.email) {
      handleError('Please input email','email')
      valid = false
    }else if (!inputs.email.match(/\S+@\S+\.\S+/)){
      handleError('Please enter valid email','email')
      valid = false

    }
    if(!inputs.fullname){
      handleError('Please enter fullname','fullname')
      valid = false

    }
    if(!inputs.phone){
      handleError('Please enter phone number','phone')
      valid = false

    }
    if(!inputs.password){
      handleError('Please enter password','password')
      valid = false

    } else if (inputs.password.length<5) { handleError('Min password length is 5 digit','password')
    valid = false

  }
    if (valid) {
    register();
  }
  };
  const register =()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);

      try {
        AsyncStorage.setItem("user", JSON.stringify(inputs));
        navigation.navigate("LoginScreen")
        
      } catch (error) {
        Alert.alert("Error","Something went wrong")
      }
    }, 3000);

  }
  const handleOnChange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (errorMessage, input) => {
    setErrors((prevState)=> ({...prevState, [input]: errorMessage}))
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Loader visible={loading}/>
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.text}>Register</Text>
        <Text style={styles.text2}>Enter Your Details to Register</Text>
        <View style={styles.inputContainer}>
          <Input
          email
          autoCapitalize="none"
          keyboardType="email-address"
          label="Email"
          error={errors.email}
          onFocus={()=>{
          handleError(null, 'email');
          }}
          onChangeText={text => handleOnChange(text, "email")}
          placeholder="Enter Your email"
          />

          <Input 
          fullname 
          label="Fullname" 
          error={errors.fullname}
          onFocus={()=>{
          handleError(null, 'fullname');
          }}
          onChangeText={text => handleOnChange(text, "fullname")}
          placeholder="Enter Your fullname" />

          <Input
          keyboardType="numeric"
          phone
          label="Phone"
          error={errors.phone}
          onFocus={()=>{
          handleError(null, 'phone');
          }}
          onChangeText={text => handleOnChange(text, "phone")}
          placeholder="Enter Your phone number"
          />

          <Input 
          password 
          label="Password" 
          error={errors.password}
          onFocus={()=>{
          handleError(null, 'password');
          }}
          onChangeText={text => handleOnChange(text, "password")}
          placeholder="Enter Your password" 
          />

          <Button style={styles.buttonStyle} title={'Register'} onPress={validate} />

          <Text style={styles.text3}>
            Already have account?
            <Text
              onPress={() => navigation.navigate('LoginScreen')}
              style={styles.text4}>
              Login
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(RegistrationScreen);
