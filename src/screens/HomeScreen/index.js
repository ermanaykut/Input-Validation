import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../components/Button';

const HomeScreen = ({navigation}) => {
  const [userDetails, setUserDetails] = useState();
  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    const userData = await AsyncStorage.getItem('user');
    if (userData) {
      setUserDetails(JSON.parse(userData));
    }
  };
  const logout = () => {
    AsyncStorage.setItem(
      'user',
      JSON.stringify({...userDetails, loggedIn: false}),
    );
    navigation.navigate('LoginScreen');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.text}>
        Welcome Home <Text style={styles.text2}>{userDetails?.fullname}</Text>{' '}
      </Text>
      <View style={styles.button}>
        <Button title="Logout" onPress={logout} />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(HomeScreen);
