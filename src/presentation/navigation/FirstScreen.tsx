


import {
  createStaticNavigation,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { Pressable, View } from 'react-native'
import { Text } from 'react-native-paper'

const FirstScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>() 

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>
        First screen
      </Text>
      <Pressable onPress={ () => navigation.navigate('SecondScreen') }>
        <Text style={{color: '#11e1e5', paddingTop: 10}}>
          Second screen
        </Text>
      </Pressable>
    </View>
  ) 
}

export default FirstScreen



