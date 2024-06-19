import { useState } from "react";
import { Text, View } from "react-native"
import { globalStyles } from "../theme/global.styles";
import { FAB } from "react-native-paper";
import Icon from 'react-native-vector-icons/Fontisto';

export const CounterM3Screen = () => {

    const [count, setCount] = useState<number>(10)


  return (
    <View style={globalStyles.centerContainer}>
        <Text style={globalStyles.title}> {count} </Text>

        <Icon name="universal-acces" size={35}/>

        <FAB
          icon="plus-a"
          style={globalStyles.fab}
          onPress={() => setCount(count + 1)}
          onLongPress={() => setCount(0)}
        />
    </View>
  )
}
