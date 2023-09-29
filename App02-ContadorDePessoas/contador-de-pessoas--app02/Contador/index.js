import React, { useState } from 'react';
import { View, Text, Button} from 'react-native';


export default function App(){
  const [number, setNumber]  = useState(0)


  function mais() {
    setNumber(( number + 1))
  }

  function menos() {
    if (number >= 1){
      setNumber(( number - 1))
    } else {
      ''
    }
  }


  return(
    <View style={{ marginTop: 20 }}>

      <Text style={{fontSize: 28, color: 'blue', textAlign: 'center'}}>
        Contador de Pessoas
      </Text>

      <Text style={{fontSize: 28, color: 'black', textAlign: 'center', marginBottom: '20px'}}>
        {number}
      </Text>

      <Button color= 'green' title="+" onPress={mais} />
      <Button color= 'red' title="-" onPress={menos} />
    </View>
  )
}
