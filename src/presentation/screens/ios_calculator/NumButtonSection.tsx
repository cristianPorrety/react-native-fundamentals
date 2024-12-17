import { StyleSheet, View } from "react-native"
import ButtonCalculator from "./shared/Button"



interface Props {
    setValue: (val: string) => void
}

export const NumButtonSection = ({setValue}: Props) => {

  return (
    <View style={styles.parentView}>
        {Array.from({ length: 11 }, (_, i) => 9 - i).map((index) => (
            <ButtonCalculator color='#505050' onPress= { () => setValue(index.toString()) } value={(index === -1) ? ',' : index.toString()} style={ (index === 0) ? { width: 180 } : {} }/>
      ))}
    </View>
  )


}

const styles = StyleSheet.create({
    parentView: {
        flexDirection: 'row-reverse',
        flexWrap: "wrap",
        width: 'auto'
    }
})



