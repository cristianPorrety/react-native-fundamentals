


import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import ButtonCalculator from './shared/Button'


interface Props {
    setValue: (val: string) => void,
    style?: ViewStyle
}

const module = (value: number[]) => {
  return value.reduce((a, b) => a % b, 1)
}

const multiplication = (value: number[]) => {
  return value.reduce((a, b) => {
    return a * b
  }, 1)
}

const division = (value: number[]) => {
  return value.reduce((a, b) => a / b, 1)
}

const substraction = (value: number[]) => {
  return value.reduce((a, b) => a - b)
}

const addition = (value: number[]) => {
  return value.reduce((a, b) => a + b)
}

type Operation = (a: number[]) => number;

//['÷', 'X', '-', '+', '=']
export const operationsAvaliable: Record<string, Operation> = {
  '%': module,
  '÷': division,
  'x': multiplication,
  '-': substraction,
  '+': addition,
}

export const OperationsButtonSection = ({setValue, style={}}: Props) => {

  return (
    <View style={{...styles.parentView, ...style}}>
        {Object.keys(operationsAvaliable).filter((operation) => operation !== '%').map((item) => (
          <ButtonCalculator color='#FF9500' onPress= { () => setValue(item) } value={ item }/>
        ))}
        <ButtonCalculator color='#FF9500' onPress= { () => setValue('=') } value={ '=' }/>
    </View>
  )
}

const styles = StyleSheet.create({
    parentView: {
        flexDirection: 'column',
        alignContent: 'space-around',
    }
})





