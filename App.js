import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import HintCard from './components/HintCard';

export default function App() {

  const [hint1, setHint1] = useState('');
  const [hint2, setHint2] = useState('');
  const [hint3, setHint3] = useState('');
  const [hint4, setHint4] = useState('');
  const [hint5, setHint5] = useState('');
  const [hint6, setHint6] = useState('');
  const [hint7, setHint7] = useState('');
  const [hint8, setHint8] = useState('');
  const [hint9, setHint9] = useState('');
  const [hint10, setHint10] = useState(''); 
  const [answer, setAnswer] = useState('');
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to HintGuessr!</Text>
      </View>
      <View style={styles.hintcards}>
        <HintCard text={'Hint 1'}/>
        <HintCard text={'Hint 2'}/>
        <HintCard text={'Hint 3'}/>
        <HintCard text={'Hint 4'}/>
        <HintCard text={'Hint 5'}/>
        <HintCard text={'Hint 6'}/>
        <HintCard text={'Hint 7'}/>
        <HintCard text={'Hint 8'}/>
        <HintCard text={'Hint 9'}/>
        <HintCard text={'Hint 10'}/>
        <HintCard text={'Answer'}/>
      </View>
      <View style={styles.buttonsection}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Next')}
          >
          <Text style={styles.buttonText}>Next Round</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcb79d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    paddingTop: windowHeight > 700 ? 70 : 30,
    paddingBottom: 30,
    alignItems: 'center', 
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#374f3f',
  },
  hintcards: {
    marginTop: windowHeight > 700 ? 85 : 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
buttonsection: {
  flexDirection: 'row', 
  justifyContent: 'space-between',
  alignItems: 'center', 
  marginTop: 10,
  width: '80%', 
},
button: {
  backgroundColor: '#374f3f',
  paddingVertical: 15,
  paddingHorizontal: 20,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1, 
  marginHorizontal: 5,
},
buttonText: {
  color: '#ffffff',
  fontSize: 20,
  fontWeight: 'bold',
  textAlign : 'center',
},
});
