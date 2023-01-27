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

const LoginScreen = ({navigation}) => {
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
    }
    
    if(!inputs.password){
      valid = false

      handleError('Please enter password','password')
    } 
    if (valid) {
    login();
  }
  };
  const login =()=>{
  setLoading(true);
  setTimeout(async()=>{
    setLoading(false);
    let userData = await AsyncStorage.getItem("user");
    if(userData){
      userData= JSON.parse(userData)
      if(inputs.email == userData.email && 
        inputs.password==userData.password)
        {
        AsyncStorage.setItem("user", JSON.stringify({...userData, loggedIn: true}))
        navigation.navigate('HomeScreen')
      } else {
        Alert.alert("Error", 'Invalid details')

      }

    }else{
      Alert.alert("Error", 'User does not exist')
    }
  },2000)

  }
  const handleOnChange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (errorMessage, input) => {
    setErrors((prevState)=> ({...prevState, [input]: errorMessage}))
  }
   const onPressRegister = ()=>{
    navigation.navigate('RegistrationScreen')
   }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Loader visible={loading}/>
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.text}>Login</Text>
        <Text style={styles.text2}>Enter Your Details to Login</Text>
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
          password 
          label="Password" 
          error={errors.password}
          onFocus={()=>{
          handleError(null, 'password');
          }}
          onChangeText={text => handleOnChange(text, "password")}
          placeholder="Enter Your password" 
          />

          <Button style={styles.buttonStyle} title={'Login'} onPress={validate} />

          <Text style={styles.text3}>
            Don't have an account?
            <Text
              onPress={onPressRegister}
              style={styles.text4}>
              Register
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(LoginScreen);
