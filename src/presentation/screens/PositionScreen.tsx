import { StyleSheet, Text, View } from "react-native"

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.greenBox}/>
        <View style={styles.purpleBox}/>
        <View style={styles.orangeBox}/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex: 0.5,
       backgroundColor: '#4cc7bd',
       //justifyContent: 'center',
       //alignItems: 'center'
    },
    title:{
        fontSize:30,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderWidth: 10
    },
    purpleBox:{
        width: 100,
        height: 100,
        backgroundColor: '#8439cf',
        borderWidth: 10,
        borderColor:'white',
        position: 'absolute',
        top: 0,
        right: 0,
    },
    orangeBox:{
        width: 100,
        height: 100,
        backgroundColor: '#e37e3a',
        borderWidth: 10,
        borderColor:'white',
        position: 'absolute',
        bottom:0,
        left: 0,
    },
    greenBox:{
        //width: 100,
        //height: 100,
        backgroundColor: '#20a720',
        borderWidth: 10,
        borderColor:'white',
        //position: 'absolute',
        //bottom:0,
        //right :0,
        //top:0,
        //left:0,
        ...StyleSheet.absoluteFillObject
    }
})