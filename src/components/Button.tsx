import React from 'react';
import {StyleSheet, TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';
import colors from '../styles/colors';


interface ButtonProps extends TouchableOpacityProps{
    titile:string;
}

export function Button( { titile, ...resto } : ButtonProps ){
    return(
        <TouchableOpacity style = {style.button} activeOpacity = {0.8} {...resto}>
            <Text style={style.buttonText}>
               { titile }
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
        marginBottom:60,
        height:60,
        width:60,
    },
    buttonText:{
        fontSize:24
    }
})