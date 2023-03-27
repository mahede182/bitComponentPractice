import React, {useRef, useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
} from 'react-native';


const DrawerComponentPractice = () =>{
    const drawer = useRef(null);
    const [drawerPosition, setDrawerPosition] = useState('left');

    // change drawer functionality
const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
        setDrawerPosition('right');
    } else {
        setDrawerPosition('left');
    }
};

    // change navigation view.
const navigationView = () => (
<View style={[styles.container, styles.navigationContainer]}>
    <Text style={styles.paragraph}>Home</Text>
    <Text style={styles.paragraph}>Menu</Text>
    <Text style={styles.paragraph}>Blog</Text>
    <Text style={styles.paragraph}>About</Text>
    <Button
    title="Close drawer"
    onPress={() => drawer.current.closeDrawer()}
    />
</View>
);

    return(
    <>
        <DrawerLayoutAndroid
        drawerBackgroundColor="rgba(58,20,10,0.4)"
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}>
            <View style={styles.container}>
                <Text style={styles.paragraph}>Drawer is on {drawerPosition}!</Text>
                <Button
                title="Change Drawer Position"
                onPress={() => changeDrawerPosition()}
                />
                <Text style={styles.paragraph}>
                Swipe from the side or press button below to see it!
                </Text>
                <Button
                title="Open drawer"
                onPress={() => drawer.current.openDrawer()}
                />
            </View>
        </DrawerLayoutAndroid>
    </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    navigationContainer: {
      backgroundColor: '#ecf0f1',
    },
    paragraph: {
      padding: 16,
      fontSize: 15,
      textAlign: 'center',
    },
  });

export default DrawerComponentPractice;