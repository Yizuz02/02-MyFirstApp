import { StyleSheet, View } from "react-native"

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box1}/>
        <View style={styles.box2}/>
        <View style={styles.box3}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
    },
    box1:{
        backgroundColor: '#5856d6',
        flex:1,
    },
    box2:{
        backgroundColor: '#2a27bc',
        flex:2,
    },
    box3:{
        backgroundColor: '#16157f',
        flex:3,
    }
})