import React from 'react';
import {StyleSheet, TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


interface ButtonProps extends TouchableOpacityProps{
    title:string;
}

export function Button( { title, ...resto } : ButtonProps ){
    return(
        <TouchableOpacity style = {style.button} activeOpacity = {0.8} {...resto}>
            <Text style={style.buttonText}>
               { title }
            </Text>
        </TouchableOpacity> 
    )
}

const style = StyleSheet.create({
    button:{
        backgroundColor:colors.green,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:16,
        height:55,
        width:120,
    },
    buttonText:{
        fontSize:16 ,
        fontFamily:fonts.heading

    }
})