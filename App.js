import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, onPress } from 'react-native';
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
  const [resetSwitches, setResetSwitches] = useState(false);
  const [newRoundFetching, setnewRoundFetching] = useState(false);
  const [recentAnswers, setRecentAnswers] = useState([]);


  const fetchNewRound = async () => {
    console.log('Fetching new round...');
    setnewRoundFetching(true);
    setResetSwitches((prev) => !prev);
      setHint1('');
      setHint2('');
      setHint3('');
      setHint4('');
      setHint5('');
      setHint6('');
      setHint7('');
      setHint8('');
      setHint9('');
      setHint10('');
      setAnswer('Loading New Round...');
    try {
      const response = await fetch(
        "https://hintguessr.vercel.app/api/round",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ recentAnswers }),
        }
      );
  
      const data = await response.json();
  
      setHint1(data.hints[0]);
      setHint2(data.hints[1]);
      setHint3(data.hints[2]);
      setHint4(data.hints[3]);
      setHint5(data.hints[4]);
      setHint6(data.hints[5]);
      setHint7(data.hints[6]);
      setHint8(data.hints[7]);
      setHint9(data.hints[8]);
      setHint10(data.hints[9]);
      setAnswer(data.answer);
      setRecentAnswers(prev =>
        [...prev, data.answer].slice(-8)
      );

      setTimeout(() => {
        setnewRoundFetching(false);
      }, 2000); 
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to HintGuessr!</Text>
      </View>
      <View style={styles.hintcards}>
        <HintCard text={hint1} isAnswer={false} reset={resetSwitches}/>
        <HintCard text={hint2} isAnswer={false} reset={resetSwitches}/>
        <HintCard text={hint3} isAnswer={false} reset={resetSwitches}/>
        <HintCard text={hint4} isAnswer={false} reset={resetSwitches}/>
        <HintCard text={hint5} isAnswer={false} reset={resetSwitches}/>
        <HintCard text={hint6} isAnswer={false} reset={resetSwitches}/>
        <HintCard text={hint7} isAnswer={false} reset={resetSwitches}/>
        <HintCard text={hint8} isAnswer={false} reset={resetSwitches}/>
        <HintCard text={hint9} isAnswer={false} reset={resetSwitches}/>
        <HintCard text={hint10} isAnswer={false} reset={resetSwitches}/>
        <HintCard text={answer} isAnswer={true} reset={resetSwitches}/>
      </View>
      <View style={styles.buttonsection}>
        <TouchableOpacity
          disabled={newRoundFetching}
          style={styles.button}
          onPress={fetchNewRound}
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
