import React from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

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
            <TouchableOpacity style = {style.button} activeOpacity = {0.8}>
                <FontAwesome.Button name="chevron-right" backgroundColor={colors.green} style={style.buttonText}>
                </FontAwesome.Button>
            </TouchableOpacity> 
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: colors.background
    },
    title:{
        fontSize:32,
        fontWeight:"bold",
        textAlign:"center",
        color: colors.heading,
        marginTop:120,
        fontFamily:fonts.heading,
        lineHeight:38
    },
    sub:{
        textAlign:"center",
        fontSize:18,
        paddingHorizontal:20,
        color:colors.heading,
        fontFamily:fonts.texto
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
        fontSize:24,
        marginLeft:10
    }
})