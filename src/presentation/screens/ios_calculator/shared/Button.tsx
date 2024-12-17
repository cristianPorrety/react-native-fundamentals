



import React from 'react'
import { Pressable, StyleSheet, View, ViewStyle } from 'react-native'
import { Text } from 'react-native-paper'

interface Props {
    value: string,
    onPress: () => void,
    onLongPress?: () => void,
    color: string,
    style?: ViewStyle 
}


export const ButtonCalculator = ({value, color, onPress, onLongPress, style = {}}: Props) => {
  return (
    <Pressable onPress={onPress} onLongPress={ onLongPress }>
        <View style = {{...styles.buttonView, ...style, backgroundColor: color}}>
            <Text style={styles.value}>
                {value}
            </Text>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    buttonView: {
        height: 85,
        width: 85,
        marginLeft: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 70
    },
    value: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#FFFFFF'
    }
})

export default ButtonCalculator


