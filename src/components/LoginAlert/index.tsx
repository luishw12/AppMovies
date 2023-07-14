import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { styles } from './styles';

export function LoginAlert({ navigation }: any) {
  return (
    <View style={styles.main}>
      <View>
        <Image style={styles.icon} source={require('../../../assets/icon.png')} />
        <Text style={{...styles.title, fontSize: 60}}>Opss!</Text>
        <Text style={{...styles.title, fontSize: 16}}>Parece que você não está logado!</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={()=>navigation.navigate("Login")}
          style={styles.loginButton}>
          <Text style={styles.textButton}>Fazer Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")} style={styles.registerButton}>
          <Text style={styles.textButton}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
