import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-ionicons'

export default function Component() {
  const auth = async () => {
    const { biometryType } = await ReactNativeBiometrics.isSensorAvailable
      .then(() => {
        if (biometryType === ReactNativeBiometrics.Biometrics) {
          console.log('Biometrics adquired');
        }
      }).catch(() => {
        console.log('Biometrics failed');
      })
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Authenticate please</Text>

      
    </View>


  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  text: {
    textAlign: "center",
    color: "#fff",
    marginVertical: 90,
    fontSize: 30,
    fontFamily: "sans-serif-thin"
  },
  logo: {
    alignItems: "center"
  }
});
