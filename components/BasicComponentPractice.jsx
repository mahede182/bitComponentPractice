import React from 'react';
import {View, Text, StyleSheet, Image,TextInput, SafeAreaView, ScrollView} from 'react-native';

function BasicComponentPractice(){
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('Number');
    return(
        <> 
    <View style={styles.container} >
        <Text style={styles.baseText}>React native Docs - Core Component</Text>
        {/* ======View===== */}
        <View style={styles.cardContainer}>
            <Text style={styles.heading}>View - Component</Text>
            <Text>The most fundamental basic UI</Text>
        </View>
        {/* ======Image===== */}
        <View style={styles.cardContainer}>
            <Text style={styles.heading}>Image - Component</Text>
            <Text>A component for displaying image</Text>
            <Text style={{color: 'red'}}>Struggling to added image.</Text>
        </View>
        {/* ======Text input==== */}
        <View style={styles.cardContainer}>
            <Text style={styles.heading}>Text Input - Component</Text>
            <Text>A component for inputting text</Text>
            <TextInput
                style={styles.input}
                value={text}
            />
            <TextInput
                style={styles.input}
                value={number}
                placeholder="useless placeholder"
                keyboardType="numeric"
            />
        </View>
        {/* ======scroll view====== */}
        <SafeAreaView style={styles.cardContainer}>
            <Text style={styles.heading}>scroll View - component</Text>
            <Text>Provides a scrolling container that can host multiple components and views</Text>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </ScrollView>
        </SafeAreaView>
    </View>
        </>
    )
}

export default BasicComponentPractice;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      cardContainer:{
        flex: 1,
      },
    heading:{
        backgroundColor: '#ddd',
        color: 'gray',
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    green:{
        backgroundColor: 'green',
        flex: 3,
        borderRadius: 50
    },
    baseText:{
        fontFamily: "Fira code",
        fontSize: 24,
    },
    tinyLogo: {
        width: 50,
        height: 50,
      },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: '#ddd'
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
        padding: 10
      }
})