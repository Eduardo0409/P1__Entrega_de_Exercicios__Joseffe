import { View, Text } from 'react-native';
import {styles} from './Styles';

import Contador from './Contador'
 
function App(){
  return(
    <View style={styles.area}>
      <Contador />
    </View>
  );
}

export default App;

