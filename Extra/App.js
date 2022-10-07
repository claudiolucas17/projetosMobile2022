import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, Component } from "react";
import { StyleSheet, Text, View, Button, } from 'react-native';
import {TextInput} from 'react-native-paper';

export default function App() {

  const [acerto, setAcerto ] = useState(0);
  const [erri, setErri ] = useState(0); 
  const [numerro, setNumerro] = useState(0);
 

  const SubirNum = () => {
    var sorte = Math.random()*100
    sorte = parseInt(sorte);
    setNumerro(sorte);
   };
  
   const DescerNum = () => {
    var sorte = Math.random()*100
    sorte = parseInt(sorte);
    setNumerro(sorte);
   }


  return (
    <View style={styles.container}>
      <Text>{`Acertos:${acerto}`}</Text>
      <Text>{`Erros:${erri}`}</Text>
      <Text>{`Número:${numerro}`}</Text>
      <Button title="⬆" style={styles.buttonstyle} onPress={() =>{SubirNum();}} color="#6200EE"/>
      <Button title="⬇" style={styles.buttonstyle} onPress={() =>{DescerNum();}} color="#6200EE"/>
      <StatusBar style="auto" />
    </View>
  );
}

/*
export default function App() {

  const [altura, SetAltura] = useState(0);
  const [base, SetBase] = useState(0); 
  const [area, SetArea] = useState(0);
 

  const validateAll = () => {

    SetArea(base*altura/2);


   }
    


  return (
    <View style={styles.container}>
      <TextInput style={styles.inputText} placeholder="Informe a Base"  onChangeText={base => SetBase(base)}/>{"\n"}
      <TextInput style={styles.inputText} placeholder="Informe a Altura"  onChangeText={altura => SetAltura(altura)}/>{"\n"}
      <Button title="Calcular Area" style={styles.buttonstyle} onPress={() =>{validateAll();}} color="#6200EE"/>
      <Text>{`Base:${base}`}</Text>
      <Text>{`Altura:${altura}`}</Text>
      <Text>{`Área:${area}`}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonstyle: {
    marginBottom: 10,
  },

});
