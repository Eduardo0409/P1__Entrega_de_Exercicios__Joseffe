import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view: {
    marginTop: 30,
  },

  titulo: {
    textAlign: 'center',
    fontSize: 32,
    padding: 5,
  },

  imagem: {
    width: 240,
    height: 240,
    margin: 10,
    alignSelf: 'center'
  },

  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 15,
    fontSize: 20,
    padding: 10,
  },

  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#2AAA8A',
    fontSize: 26,
  },

  resultado: {
    fontSize: 30,
    textAlign: 'center',
    color: "red",
    margin: 5,
  },
});

export { styles };
