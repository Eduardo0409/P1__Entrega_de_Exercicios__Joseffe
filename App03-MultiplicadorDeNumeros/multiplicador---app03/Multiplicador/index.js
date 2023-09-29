import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Pressable} from 'react-native';



function App(){

  const[valor1 , setValor1] = useState('')
  const[valor2 , setValor2] = useState('')
  const[result, setResult] = useState('')

   function calcular(){
    const resultado = valor1 * valor2; 
    setResult("Resultado: " + resultado.toString())
  }


  return(
    <View>
      <Text style={styles.titulo}>Multiplicador de Números</Text>

      <TextInput  
        style={styles.input} 
        placeholder = " Digite o primeiro valor"
        onChangeText={setValor1}
      />

      <TextInput 
      style={styles.input} 
      placeholder=" Digite o segundo valor"
      onChangeText={setValor2}
      />

      <Pressable style={styles.calculo} onPress={calcular}>Calcular</Pressable>

      <Text style={styles.resultado}>{result}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titulo:{
    textAlign: "center",
    fontSize: "24px",
    color: "orange",
    marginTop: "10px",
    marginBottom: '20px'
  },
  input:{
    borderWidth: 2,
    height: 25,
    width: 200,
    margin: 10,
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: '20px',
    marginTop:'10px',
  },
  calculo:{
    backgroundColor: "blue",
    color: "white",
    padding: 7,
    width: '200px',
    alignSelf: 'center',
    textAlign: 'center',
    borderRadius: '20px',
    marginTop: "10px",
  },
  resultado:{
    fontSize: '26px',
    marginTop: '10px',
    color: 'green',
    textAlign: 'center'
  }
})

export default App;