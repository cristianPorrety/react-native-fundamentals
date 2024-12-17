import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


interface Props {
    name: string
}


const HelloworldScreen = ( {name = "World"}: Props ) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello { name }
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
    }
})


export default HelloworldScreen
