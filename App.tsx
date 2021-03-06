import React from 'react';
import { Welcome } from './src/pages/Welcome';
import { UserIndentification } from './src/pages/UserIndentification';
import { Confirmation } from './src/pages/Confirmation';


import {useFonts, Jost_400Regular, Jost_600SemiBold} from '@expo-google-fonts/jost'
import AppLoading from 'expo-app-loading';

export default function App(){
  const [fontsCarregadas, Erro] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  if(!fontsCarregadas)
    return <AppLoading />
  
  return (
    <Confirmation />
  )
}