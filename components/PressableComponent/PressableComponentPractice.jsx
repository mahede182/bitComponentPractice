import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View, Switch} from 'react-native';

const PressableComponentPractice = () =>{
const [timesPressed, setTimesPressed] = useState(0);
const [isEnabled, setIsEnabled] = useState(false);

const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  let textLog = '';
    if (timesPressed > 1) {
        textLog = timesPressed + 'x onPress';
    } else if (timesPressed > 0) {
        textLog = 'onPress';
    }

    return (
<>
    <View style={styles.container}>
        <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
        <Pressable
        onPress={() => {
            setTimesPressed(current => current + 1);
        }}
        style={({pressed}) => [
            {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            },
            styles.wrapperCustom,
        ]}>
        {({pressed}) => (
            <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
        )}
        </Pressable>
        {/* ====on Long press==== */}
        <Pressable
        onLongPress={() => {
            setTimesPressed(current => current + 5);
        }}
        style={({pressed}) => [
            {
            backgroundColor: pressed ? 'gray' : 'white',
            },
            styles.wrapperCustom,
        ]}>
        {({pressed}) => (
            <Text style={styles.text}>{pressed ? 'longPressed!' : 'Long time Press Me * 5'}</Text>
        )}
        </Pressable>
        <View style={styles.logBox}>
            <Text style={styles.fontDesign}  testID="pressable_press_console">{textLog}</Text>
        </View>
    </View>
</>
      );
    };
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logBox: {
        padding: 20,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9',
    },
    fontDesign: {
        padding: 20,
        fontSize: 32
    }
    });

export default PressableComponentPractice;