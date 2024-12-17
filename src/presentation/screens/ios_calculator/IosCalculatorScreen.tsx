import React, { useState } from 'react'
import { Pressable, StyleSheet, useWindowDimensions, View } from 'react-native'
import SpecialOperationSection from './SpecialOperationSection'
import { NumButtonSection } from './NumButtonSection'
import {OperationsButtonSection, operationsAvaliable} from './OperationsButtonSection'
import { Text } from 'react-native-paper'

export const IosCalculatorScreen = () => {
  const {width} = useWindowDimensions()
  const {typedOperation, previewResult, typeOperation, clearCalculator, onSpecialCharTyped} = calculatorHook()

  return (
    <>
      <View style={styles.calculatorContainer}>
        <View style={styles.result}>
          <Text style={styles.resultText}>
            {typedOperation}
          </Text>
          {(previewResult.length > 0) ? 
            <Pressable onPress={ () => { typeOperation('=') } }>
              <Text style={{...styles.previewText}}>
                {previewResult}
              </Text>
            </Pressable>
          : null}
        </View>
        <View style={{...styles.buttons, width: width}}>
          <View style={styles.specialButtonsAndNums}> 
            <SpecialOperationSection setValue={ (val) => onSpecialCharTyped(val) } onClearValues={() => { clearCalculator() }}/>
            <NumButtonSection setValue={(val) => { typeOperation(val) }}/>
          </View>
          <OperationsButtonSection setValue={(val) => { typeOperation(val) }} style={styles.operations}/>
        </View>
      </View>
    </>
  )
}


const calculatorHook = () => {
  const [typedOperation, setTypedOperation] = useState("0")
  const [previewResult, setPreview] = useState("")
  
  const onSpecialCharTyped = (specialOperator: string) => {
    console.log("special operator: " + specialOperator)
    switch(specialOperator) {
      case 'C': {
        undoNumbers()
        break
      } 
      case '%': {
        typeOperation('%')
        break
      }
    }
  }

  const typeOperation = (operator: string) => {
    if(operator === '=' && previewResult.length > 0) {
      setTypedOperation(previewResult)
      setPreview('')
      return
    }
    
    if((isOperator(operator) || operator === '=') && typedOperation === '0' ) {
      return
    }

    if(isOperatorAgain(operator)) {
      return
    }

    let typedOperationSoFar = (typedOperation.length === 1 && typedOperation === '0') ? operator : typedOperation + operator
    setTypedOperation(typedOperationSoFar)
    if(isOperator(typedOperationSoFar[typedOperationSoFar.length - 1])) {
      typedOperationSoFar = typedOperationSoFar.slice(0, -1)
    }
    const result = getResultAfterCalculation(typedOperationSoFar)
    if(result !== typedOperationSoFar) {
      setPreview(result)
    }
  }

  const clearCalculator = () => {
    setTypedOperation('0')
    setPreview('')
  }

  const undoNumbers = () => {
    
    if(typedOperation.length === 1) {
      setTypedOperation('0')
      setPreview('')
      return
    }
    const typedOperationWithUndo = typedOperation.substring(0, typedOperation.length -1)
    setTypedOperation(typedOperationWithUndo)
    setPreview(getResultAfterCalculation(typedOperationWithUndo))
  }

  const isOperatorAgain = (operator: string) => {
    const typedOperationLastCharacterOperationFound = Object.keys(operationsAvaliable).find((op: string) => typedOperation[typedOperation.length - 1] === op) ?? ''
    return isOperator(operator) && typedOperationLastCharacterOperationFound.length > 0
  }

  const isOperator = (operator: string) => {
    return (Object.keys(operationsAvaliable).find((op: string) => operator === op) ?? '').length > 0
  }

  const getResultAfterCalculation = (operation: string) => {
    let currentOperation = ''
    let currentOperator = ''

    operation.split("").forEach((operationCharacter) => {

      const isCharOperator = isOperator(operationCharacter)
      if(isCharOperator && currentOperator.length > 0 && currentOperator !== currentOperation){
        currentOperation = operationsAvaliable[currentOperator](currentOperation.split(currentOperator).map(Number)).toString()
      }

      if(isCharOperator) {
        currentOperator = operationCharacter
      }

      currentOperation = currentOperation + operationCharacter

    })
    console.log("current operation: " + currentOperation + " current operator: " + currentOperator + " and operation: " + currentOperation.split(currentOperator))

    return (currentOperator.length > 0) ? operationsAvaliable[currentOperator](currentOperation.split(currentOperator).map(Number)).toString() : ''
  }

  return {
    typedOperation,
    previewResult,
    typeOperation,
    clearCalculator,
    onSpecialCharTyped
  }


}


const styles = StyleSheet.create({
  calculatorContainer: {
    flex: 1,
    backgroundColor: '#333333',
    paddingRight: 7,
  },
  result: {
    flex: 2,
    paddingRight: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  resultText: {
    fontSize: 80,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  previewText: {
    fontSize: 30,
    color: '#949494',
    fontWeight: 'bold'
  },
  buttons: {
    flex: 3,
    flexDirection: 'row',
    paddingRight: 7,
  },
  specialButtonsAndNums: {
    flex: 3,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  operations: {
    flex: 1.1,
    justifyContent: 'center'
  }
})
