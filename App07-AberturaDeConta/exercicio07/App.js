import { useState } from 'react';
import { View, Text, TextInput, Switch, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { styles } from './components/styles';

function App() {
  const [nome, setNome] = useState();
  const [idade, setIdade] = useState();
  const [sexo, setSexo] = useState();
  const [escola, setEscola] = useState();
  const [limite, setLimite] = useState(0);
  const [nacio, setNacio] = useState();
  const [exibirResultados, setExibirResultados] = useState(false);

  function result() {
    setExibirResultados(true);
  }

  return (
    <View>
      <Text style={styles.titulo}>Abertura de Conta</Text>
      <View style={styles.container}>
        <Text>Nome:</Text>
        <TextInput style={styles.input} onChangeText={setNome} />
      </View>
      <View style={styles.container}>
        <Text>Idade:</Text>
        <TextInput style={styles.input} onChangeText={setIdade} />
      </View>
      <View style={styles.container}>
        <Text>Sexo:</Text>
        <Picker
          style={styles.input}
          selectedValue={sexo}
          onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}>
          <Picker.Item key={1} value={'Masculino'} label="Masculino" />
          <Picker.Item key={2} value={'Feminino'} label="Feminino" />
          <Picker.Item key={3} value={'Não-Binário'} label="Não-Binário" />
        </Picker>
      </View>
      <View style={styles.container}>
        <Text>Escolaridade:</Text>
        <Picker
          style={styles.input}
          selectedValue={escola}
          onValueChange={(itemValue) => setEscola(itemValue)}>
          <Picker.Item
            key={1}
            value={'Fundamental incompleto'}
            label="Fundamental incompleto"
          />
          <Picker.Item
            key={2}
            value={'Fundamental completo'}
            label="Fundamental completo"
          />
          <Picker.Item
            key={1}
            value={'Médio incompleto'}
            label="Médio incompleto"
          />
          <Picker.Item
            key={2}
            value={'Médio completo'}
            label="Médio completo"
          />
          <Picker.Item
            key={1}
            value={'Superior incompleto'}
            label="Superior incompleto"
          />
          <Picker.Item
            key={2}
            value={'Superior completo'}
            label="Superior completo"
          />
        </Picker>
      </View>
      <View style={styles.container}>
        <Text>Limite:</Text>
        <Slider
          minimumValue={0}
          maximumValue={1600}
          step={100}
          onValueChange={(valorSelecionado) => setLimite(valorSelecionado)}
          value={limite} style={styles.slider}
        />
      </View>
      <Text style={{ textAlign: 'center', fontSize: 20 }}>
        {limite.toFixed(0)}
      </Text>

      <View style={styles.container}>
        <Text>Brasileiro:</Text>
        <Switch
          value={nacio}
          onValueChange={(valorSwitch) => setNacio(valorSwitch)}
        />
      </View>

      <Pressable style={styles.botao} onPress={() => setExibirResultados(true)}>
        <Text style={styles.botao}>Confirmar</Text>
      </Pressable>

      {exibirResultados && (
        <View>
          <Text style={styles.resultadoTitulo}>Dados Informados:</Text>
          <Text style={styles.resultado}>Nome: {nome}</Text>
          <Text style={styles.resultado}>Idade: {idade}</Text>
          <Text style={styles.resultado}>Sexo: {sexo}</Text>
          <Text style={styles.resultado}>Escola: {escola}</Text>
          <Text style={styles.resultado}>Limite: {limite}</Text>
          <Text style={styles.resultado}>
            Brasileiro: {nacio ? 'Sim' : 'Não'}
          </Text>
        </View>
      )}
    </View>
  );
}

export default App;
