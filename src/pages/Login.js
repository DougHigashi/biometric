import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ToastAndroid  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ReactNativeBiometrics from 'react-native-biometrics';

export default function Component() {

  const auth = async () => {
    ReactNativeBiometrics.simplePrompt({ promptMessage: 'Confirm fingerprint' })
      .then((resultObject) => {
        const { success } = resultObject
        if (success) {
          console.log('successful biometrics provided');
          ToastAndroid.show("Authenticated!", ToastAndroid.SHORT);
        } else {
          console.log('user cancelled biometric prompt');
          ToastAndroid.show("Authentication failed", ToastAndroid.SHORT);
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const getKeys = () => {
    ReactNativeBiometrics.createKeys()
      .then((resultObject) => {
        const { publicKey } = resultObject
        console.log(publicKey);
        Alert.alert('Keys generated', publicKey)
      })
  }

  const deleteKeys = () => {
    ReactNativeBiometrics.deleteKeys()
      .then((resultObject) => {
        const { keysDeleted } = resultObject

        if (keysDeleted) {
          console.log('Successful deletion');
          ToastAndroid.show("Keys deleted", ToastAndroid.SHORT);
        } else {
          console.log('Unsuccessful deletion because there were no keys to delete');
          ToastAndroid.show('No keys to delete', ToastAndroid.SHORT)
        }
      })
  }


  return (
    <View style={styles.container}>

      <Text style={styles.textTop}>Authenticate</Text>
      <TouchableOpacity style={styles.logo} onPress={auth}>
        <Icon name="finger-print" color="white" size={128} />
      </TouchableOpacity>

      <Text style={styles.text}>Print keys</Text>
      <TouchableOpacity style={styles.logo} onPress={getKeys}>
        <Icon name="key-sharp" color="white" size={128} />
      </TouchableOpacity>

      <Text style={styles.text}>Delete keys</Text>
      <TouchableOpacity style={styles.logo} onPress={deleteKeys}>
        <Icon name="close-circle-sharp" color="white" size={128} />
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
    marginTop: 15,
    fontSize: 30,
    fontFamily: "sans-serif-thin"
  },
  textTop: {
    textAlign: "center",
    color: "#fff",
    marginTop: 90,
    fontSize: 30,
    fontFamily: "sans-serif-thin"
  },
  logo: {
    alignItems: "center",
    marginTop: 10
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
