import React from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

export function Welcome(){
    return(
        <SafeAreaView style={style.container}>
            <Text style={style.title}>
                Gerencie {'\n'}
                suas plantas de {'\n'}
                forma fácil
            </Text>
            <Image source = { wateringImg } />
            <Text style={style.sub}>
                Não esqueça mais de regar suas plantas. Nós cuidaremos de lembrar você sempre que 
                precisar.
            </Text>
            <TouchableOpacity style={style.button}>
                <Text style={style.buttonText}>
                    >
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    )

}

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.background
    },
    title:{
        fontSize:32,
        fontWeight:"bold",
        textAlign:"center",
        color: colors.heading,
        marginTop:120
    },
    sub:{
        textAlign:"center",
        fontSize:18,
        paddingHorizontal:20,
        color:colors.heading

    },
    button:{
        backgroundColor:colors.green,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:16,
        marginBottom:60,
        height:60,
        width:60,
        

    },
    buttonText:{
        fontSize:24
    }

})