import React, { useState } from 'react';
import {SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Button } from '../components/Button';

export function UserIndentification(){
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>()

    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!! name);

    }

    function handleInputFocus(){
        setIsFocused(true);
    }

    function handleInputChange(value:string){
        setIsFilled(!! value);
        setName(value);
    }


    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.form}>
                    <Text style={styles.emoji}>
                        {isFilled? '😄':'😀'}
                    </Text>
                    <Text style={styles.texto}>
                        Como podemos {'\n'}
                        chamar você
                    </Text>
                    <TextInput style={[
                        styles.input,
                        (isFocused || isFilled) &&  {borderColor:colors.green}
                    ]}
                     onBlur={handleInputBlur}
                     onFocus={handleInputFocus}
                     onChangeText = {handleInputChange}
                     placeholder='Digite seu nome'>

                    </TextInput>
                    <View style={styles.footer}>
                    <Button title ='confirmar' />
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "space-around",
        width:'100%'
    },content:{
        flex:1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: colors.background
    },form:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:54
    },emoji:{
        fontSize:44
    },input:{
        borderBottomWidth:2,
        borderColor:colors.gray,
        color:colors.heading,
        width:'100%',
        fontSize:18,
        marginTop:50,
        padding:10,
        textAlign:'center',
    },texto:{
        fontSize:32,
        fontFamily:fonts.texto,
        color:colors.heading,
        paddingTop:20,
        textAlign:'center'
    },footer:{
        width:'100%',
        marginTop:40,

    }

})