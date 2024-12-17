

import React from 'react'
import { Text, View } from 'react-native'
import HelloworldScreen from './src/presentation/screens/HelloworldScreen'
import CounterScreen from './src/presentation/screens/CounterScreen'
import { PaperProvider } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons';
import DesignInDeepthScreen from './src/presentation/screens/DesignInDeepthScreen'
import { SafeAreaView } from 'react-native-safe-area-context'
import {OperationsButtonSection} from './src/presentation/screens/ios_calculator/OperationsButtonSection'
import SpecialOperationSection from './src/presentation/screens/ios_calculator/SpecialOperationSection'
import { NumButtonSection } from './src/presentation/screens/ios_calculator/NumButtonSection'
import { IosCalculatorScreen } from './src/presentation/screens/ios_calculator/IosCalculatorScreen'
import { NavigationContainer } from '@react-navigation/native'
import { Stack } from './src/presentation/navigation/navigation'
import FirstScreen from './src/presentation/navigation/FirstScreen'
import SecondScreen from './src/presentation/navigation/SecondScreen'
const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider
      settings={{
        icon: (props) => <Icon {...props} />
      }}  
    >

    <Stack.Navigator initialRouteName="FirstScreen">
      <Stack.Screen name="FirstScreen" component={FirstScreen} />
      <Stack.Screen name="SecondScreen" component={SecondScreen} />
    </Stack.Navigator>
    

      {/*<CounterScreen/>*/}
      {
        /*
          <SafeAreaView style={{flex: 1 }} >
        {/*<DesignInDeepthScreen/ > }
        <IosCalculatorScreen/>
      </SafeAreaView>
        */
      }
      
    </PaperProvider>
    </NavigationContainer>
  )
}

export default App


