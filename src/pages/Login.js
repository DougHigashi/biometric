import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ReactNativeBiometrics from 'react-native-biometrics';

export default function Component() {
  const auth = async () => {
    ReactNativeBiometrics.simplePrompt({ promptMessage: 'Confirm fingerprint' })
      .then((resultObject) => {
        const { success } = resultObject

        if (success) {
          console.log('successful biometrics provided')
        } else {
          console.log('user cancelled biometric prompt')
        }
      })
      .catch(() => {
        console.log('biometrics failed')
      })
  }


  return (
    <View style={styles.container}>

      <Text style={styles.text}>Authenticate please</Text>


      <TouchableOpacity style={styles.logo} onPress={auth}>
        <Icon name="finger-print" color="white" size={128} />
      </TouchableOpacity>
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
    marginVertical: 60,
    fontSize: 30,
    fontFamily: "sans-serif-thin"
  },
  logo: {
    alignItems: "center"
  }, button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 50
  },
  subText: {
    textAlign: "center",
    fontSize: 12,
    color: "#fff",
    fontFamily: "sans-serif-thin"
  },

});
