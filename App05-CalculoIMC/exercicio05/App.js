import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  Image,
} from 'react-native';
import { styles } from './components/styles';

let imcImg = 'https://sallet.com.br/wp-content/uploads/2022/11/imc.jpg';


function App() {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [imc, setImc] = useState();

function result() {
  const r = peso/(altura*altura)
  setImc(r)
}

function mensagem(imc){
  if (imc<18.5){
    return "Abaixo do peso"
  }if (imc<24.9){
    return "Peso normal"
  }
  if (imc<29.9){
    return "Sobrepeso"
  }if (imc<34.9){
    return "Obesidade grau I"
  }
  if (imc<39.9){
    return "Obesidade grau II"
  }if (imc>=40){
    return "Obesidade grau III"
  }
  
}

  return (
    <View style={styles.view}>
      <Text style={styles.titulo}>Cálculo IMC</Text>

        <Image
          source={{ uri: imcImg }}
          style={styles.imagem}
        />


      <TextInput
        style={styles.input}
        placeholder="Peso"
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura"
        onChangeText={setAltura}
      />

      <Pressable style={styles.botao} onPress={result}>
        <Text style={styles.botao}>Verificar</Text>
      </Pressable>
      <Text style={styles.resultado}>{mensagem(imc)}</Text>
      <Text style={styles.resultado}>{imc}</Text>
    </View>
  );
}

export default App;
