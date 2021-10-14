import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';
import Icon from 'react-native-vector-icons/Ionicons';
import { database } from '../config/Firebase';

export default function Cadastro({ navigation }) {

    const [nome, setNome] = useState('');
    const [codBiom, setCodBiom] = useState('');

    async function cadastrar() {
        if(codBiom !== null){
             database.collection('usuarios').doc(codBiom).set({ nome, codBiom })
            .then(() => {
                navigation.navigate('Login');
                 Alert.alert('Cadastrado com sucesso!', 'Sua conta foi criada com sucesso!',[ {
                text: "Ok" },]);
            }).catch((error) => {
                Alert.alert("Ops!", error.Message);
             });
        } else {
            Alert.alert("OPS!","Favor cadastrar Biometria!")
        }
    }

    const getKeys = () => {
        ReactNativeBiometrics.createKeys()
          .then((resultObject) => {
            const { publicKey } = resultObject
            codBiom = setCodBiom(publicKey);
            console.log(publicKey);
          })
      }

      return (
        <View style={styles.container}>
            <Text style={styles.logo}>Cadastre-se</Text>
            <TextInput placeholder="Nome" style={styles.input} onChangeText={nome => setNome(nome)} value={nome} />
            <Text style={styles.text}>Biometria</Text>
             <TouchableOpacity style={styles.logo} onPress={getKeys}>
             <Icon name="finger-print" color="white" size={128} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { cadastrar() }} style={styles.botao}>
                <Text >Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text >Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}