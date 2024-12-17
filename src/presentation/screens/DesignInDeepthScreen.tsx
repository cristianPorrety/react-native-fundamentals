

import React from 'react'
import { StyleSheet, useWindowDimensions, View } from 'react-native'
import { Text } from 'react-native-paper'

export const DesignInDeepthScreen = () => {
    const {width, height} = useWindowDimensions()

  return (
    <View style= {{...styles.parentContainer, width: width * 0.6, height: 400}}>
        <View style= {{ ...styles.secondChild}} />
        <View style= {{ ...styles.childContainer, alignSelf: 'center'}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
        <View style= {{ ...styles.childContainer}}/>
    </View>
  )
}


const styles = StyleSheet.create({
    parentContainer: {
        backgroundColor: '#9ce707',
        left: 10,
        width: 100,
        height: 100,
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'flex-end'
    },
    childContainer: {
        width: 20,
        height: 20,
        backgroundColor: '#c63e3e'
    },
    secondChild: {
        width: 100,
        height: 100,
        position: 'absolute',
        backgroundColor: '#c63ec6',
        bottom: 0,
        right: 0,
    }
})


export default DesignInDeepthScreen
