import React from 'react';
import {Text} from './src/components/Text/Text';
import {View} from 'react-native';

function App(): JSX.Element {
  return (
    <View>
      <Text style={{fontFamily: 'NovaSquare-Regular', fontSize: 80}}>
        Teste
      </Text>
      <Text preset="heading" style={{fontFamily: 'PlayfairDisplay-Medium'}}>
        Mamao
      </Text>
      <Text preset="heading" style={{fontFamily: 'Outfit-Medium'}}>
        Mamao
      </Text>
    </View>
  );
}

export default App;
