import { ActivityIndicator, SafeAreaView, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import styles from './style'
import { colors } from '../../utils/colors'


const Loader =({visible= false})=> {
  const {height, width}= useWindowDimensions()
  return (visible && (

      
    <SafeAreaView style={[styles.container,{height, width}] }>
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={colors.blue}/>
          <Text style={styles.loadertext}>Loading...</Text>
        </View>

    </SafeAreaView>
  
  ))
}

export default React.memo(Loader)

