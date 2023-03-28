import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const image = {uri: 'https://reactjs.org/logo-og.png'};
const bitImage = {uri: 'https://lh3.googleusercontent.com/p/AF1QipNyiioe6hBYIfj9m56FaItzvkdxK0MEQBYEdXer=s1360-w1360-h1020'}

const BgComponent = () => { 
return(
<>
  <View style={styles.container}>
      
      <ImageBackground source={bitImage} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Hello Bit</Text>
      </ImageBackground>
      
  </View>
</>)
  
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
  });

export default BgComponent;