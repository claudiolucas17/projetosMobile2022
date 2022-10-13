import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, Component } from "react";
import { StyleSheet, Text, View, Button, } from 'react-native';

export default function App() {

  const [acerto, setAcerto ] = useState(0);
  const [erri, setErri ] = useState(0); 
  const [numerro, setNumerro] = useState(0);
  const [GameStart, setGameStart] = useState(false);
  const [Sorte, setSorte] = useState (0);
  const [Pastnumber, setPastnumber] = useState (0);

  function randomizer(){

    let ssorte = Math.random()*100
    ssorte = parseInt(ssorte);
    setNumerro(ssorte);
    SettingsUAL();
  }

  function SettingsUAL(){

    
    setPastnumber(numerro);
    console.log("Numerro " + numerro);
    console.log("Pastnumber " + Pastnumber);
  }

  const Start001 = () => {

    if(GameStart == false){

    console.log("Game Start agora é True!");
    randomizer();
    setPastnumber(numerro);
    setGameStart(true);

    }else{

      alert("Você Já Startou o Game!");

    }
    
   }

   const SubirNum = () => {

    if(GameStart == true){
      console.log("O past number antes da verificação"+Pastnumber);
      if(Pastnumber >= numerro){
        
        
        setAcerto((acerto+1));
        randomizer();
        console.log(Pastnumber);
        
      }else{

        
        setErri((erri+1));
        randomizer();
        console.log(Pastnumber);
      }

    }else{

        alert("Dê start no game primeiro");

    }

   }
  
   const DescerNum = () => {
    console.log("Não Funciona Por Enquanto!");
   }


  return (
    <View style={styles.container}>
      <Text>{`Acertos:${acerto}`}</Text>
      <Text>{`Erros:${erri}`}</Text>
      <Text>{`Número:${numerro}`}</Text>
      <Button title="⬆" style={styles.buttonstyle} onPress={() =>{SubirNum();}} color="#6200EE"/>
      <Button title="Start" style={styles.buttonstyle} onPress={() =>{Start001();}} color="#6200EE"/>
      <Button title="⬇" style={styles.buttonstyle} onPress={() =>{DescerNum();}} color="#6200EE"/>
      <StatusBar style="auto" />
    </View>
  );
}

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