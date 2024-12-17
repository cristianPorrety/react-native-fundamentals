


import React from 'react'
import ButtonCalculator from './shared/Button'
import { StyleSheet, View } from 'react-native'


interface Props {
    setValue: (val: string) => void
    onClearValues: () => void 
}

const SpecialOperationSection = ({setValue, onClearValues}: Props) => {
  return (
    <View style={styles.parentView}>
        <ButtonCalculator color='#949494' onPress= { () => setValue('C') } onLongPress={ onClearValues } value='C'/>
        <ButtonCalculator color='#949494' onPress= { () => setValue('+/-') } value='+/-'/>
        <ButtonCalculator color='#949494' onPress= { () => setValue('%') } value='%'/>
    </View>
  )
}

const styles = StyleSheet.create({
    parentView: {
        flexDirection: 'row',
    }
})


export default SpecialOperationSection



