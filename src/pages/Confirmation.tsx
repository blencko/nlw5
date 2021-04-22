import React from 'react';
import {SafeAreaView, StyleSheet,Text,View} from 'react-native';
import {Button} from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function Confirmation(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😁
                </Text>
                <Text style={styles.title}>
                    Prontinho!
                </Text>

                <Text style={styles.subtitle}>
                    Agora vamos começar a cuidar das suas
                    plantinhas com muito amor e carinho
                </Text>
                <View style={styles.footer}>
                    <Button title='Começar'/>
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
    },
    content:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background,
        width:'100%',
        padding:30
    },
    title:{
        fontSize:22,
        fontFamily:fonts.heading,
        color:colors.heading,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        lineHeight:30,
        marginTop:45
    },
    subtitle:{
        fontFamily:fonts.texto,
        textAlign:'center',
        fontSize:18,
        paddingVertical:10,
        color:colors.heading,
        
    },
    emoji:{
        fontSize:70,
        textAlign:'center'
    },
    texto:{
        fontSize:32,
        fontFamily:fonts.texto,
        color:colors.heading,
        paddingTop:20,
        textAlign:'center'
    },
    footer:{
        width:'100%',
        paddingHorizontal:105,
        marginTop:35

    }

})