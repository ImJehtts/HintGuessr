import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Switch} from 'react-native';

const HintCard= (props) => {
    const [showText, setShowText] = useState(true);

    return (
        <View style={styles.row}>
             <View
            style={[
            styles.card,
            { backgroundColor: showText ? '#572618' : '#bd764c' }
            ]}
            >
            <Text style={styles.hintText}>
                {showText ? props.text : ' '}
            </Text>
            </View>
            <Switch
            value={showText}
            onValueChange={setShowText}
            trackColor={{ false: '#c18c5d', true: '#572618' }}
            ios_backgroundColor={'#bd764c'}
            />
      </View>
    );
}
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    card: {
        borderRadius: 10,
        padding: 5,
        marginVertical: windowHeight > 700 ? 20 : 10,
        marginTop: 0,
        marginRight: 20,
        width: 250,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    hintText: {
        fontSize: windowHeight > 700 ? 20 : 15,
        color: '#fff',
        paddingTop: 5,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default HintCard;
