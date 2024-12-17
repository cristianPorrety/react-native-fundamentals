import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, FAB } from 'react-native-paper'
import Icon from '@react-native-vector-icons/fontawesome6';


const CounterScreen = () => {
    const [count, setCount] = useState(0)

  return (
    <View style={ styles.container }>
      <Text style={ styles.counterText } >
        { count }
      </Text>
      {/*<Button onPress={ () => setCount(count +1) } mode='contained' contentStyle= { styles.buttonStyle } buttonColor='#9ce707'>
        +1
      </Button>*/}
      <FAB icon={ () => <Icon name="plus" iconStyle='solid' color={"#FFFFFF"} size={25} />} onPress={ () => setCount(count +1) } style = { styles.buttonStyle }>
        
      </FAB>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterText: {
        textAlign: 'center',
        fontSize: 90,
        fontWeight: 'bold'
    },
    buttonStyle: {
      backgroundColor: "#9ce707",
      color: '#FFFFFF',
      position: 'absolute',
      margin: 16,
      justifyContent: 'center',
      right: 0,
      bottom: 0,
    }
})


export default CounterScreen
