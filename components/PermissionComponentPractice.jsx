// ====here we only used camera permission====

import React from 'react';
import {
  Button,
  PermissionsAndroid,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';

const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Bit App Camera Permission',
          message:
            'Bit App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('You can use the camera');
      } else {
        Alert.alert('Camera permission denied');
      }
    } catch (err) {
      Alert.alert(err);
    }
  };
  
  const PermissionComponentPractice = () => {
    return(
<>     
    <View style={styles.container}>
        <Text style={styles.item}>Try permissions</Text>
        <Button title="request permissions" onPress={requestCameraPermission} />
    </View>
</>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: StatusBar.currentHeight,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    item: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  export default PermissionComponentPractice;