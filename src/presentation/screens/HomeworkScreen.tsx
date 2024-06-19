import { View, StyleSheet } from 'react-native';

export const HomeworkScreen = () => {
  return (
    <View style={styles.container}>
        <View style={[styles.box, styles.purpleBox]}/>
        <View style={[styles.box, styles.orangeBox]}/>
        <View style={[styles.box, styles.blueBox]}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#28425B',
        //alignItems: 'flex-start', //2
        justifyContent: 'center', //2 3 7 8
        //flexDirection: 'row-reverse',//4
        alignItems: 'center', //4 5 6 7 8
        //justifyContent: 'space-between', //4 5 6
        flexDirection: 'row',//5 9
    }, 
    box:{
        width: 100, // 1 2 3 4 5 7 8
        //width: '100%', //6
        height: 100, // 1 2 3 4 6 7 8
        //height: '100%', //5
        borderWidth: 10,
        borderColor: 'white'
    },
    purpleBox:{
        backgroundColor: '#5856D6',
        //alignSelf: 'flex-end', //3
        //alignSelf: 'flex-start', //4
        //flex:1, //6
        //top: 100, //8 
    },
    orangeBox:{
        backgroundColor: '#F0A23B',
        //flex:1, //1 6
        //left: 100, //7 8
        top: 50 //9
    },
    blueBox:{
        backgroundColor: '#28C4D9',
        //width:'100%', //2
        //alignSelf: 'center', //3
        //alignSelf: 'flex-end', //4
        //flex:2, //6
    }
})