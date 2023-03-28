import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

// Like that Loading something
const ActivityIndicatorComponentPractice = () =>{
    return (
<>
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator />
        <ActivityIndicator size="large" />
        <ActivityIndicator size="small" color="#0000ff" />
        <ActivityIndicator size="large" color="#00ff00" />
    </View>
</>
    )
    
}
const styles={
container: {
    flex: 1,
    justifyContent: 'center',
  },
horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  }
}



export default ActivityIndicatorComponentPractice;