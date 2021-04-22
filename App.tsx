import React from 'react';
import { Welcome } from './src/pages/Welcome';
import {useFonts, Jost_400Regular, Jost_600SemiBold} from '@expo-google-fonts/jost'


export default function App(){
  const [fontsCarregadas, Erro] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })
  
  return (
    <Welcome />
  )
}