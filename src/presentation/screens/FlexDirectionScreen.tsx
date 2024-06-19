import { ScrollView, StyleSheet, View } from "react-native"

export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>

            <View style={[styles.box, styles.box1]}/>
            <View style={[styles.box, styles.box2]}/>
            <View style={[styles.box, styles.box3]}/>
            <View style={[styles.box, styles.box4]}/>
            <View style={[styles.box, styles.box1]}/>
            <View style={[styles.box, styles.box2]}/>
            <View style={[styles.box, styles.box3]}/>
            <View style={[styles.box, styles.box4]}/>
            <View style={[styles.box, styles.box1]}/>
            <View style={[styles.box, styles.box2]}/>
            <View style={[styles.box, styles.box3]}/>
            <View style={[styles.box, styles.box4]}/>

        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'gray',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10
    },
    box:{
        //flex:1,
        width:100,
        height:100,
    },
    box1:{
        backgroundColor: '#5856d6',
        //top: -100
    },
    box2:{
        backgroundColor: '#2a27bc',
    },
    box3:{
        backgroundColor: '#16157f',
    },
    box4:{
        backgroundColor: '#080666',
    }
})