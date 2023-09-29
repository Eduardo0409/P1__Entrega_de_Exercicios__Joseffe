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

  input: {
    height: 35,
    borderWidth: 1,
    borderColor: '#222',
    fontSize: 14,
    marginLeft: 10,
    flex: 1,
  },

  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#2AAA8A',
    fontSize: 26,
  },

  resultado: {
    fontSize: 20,
    textAlign: 'left',
    margin: 5,
  },

  resultadoTitulo: {
    fontSize: 30,
    textAlign: 'center',
    margin: 5,
    color: 'blue',
  },

  slider: {
    marginHorizontal: 25,
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 20,
  },
});

export { styles };
