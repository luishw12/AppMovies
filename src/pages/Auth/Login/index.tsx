import React, { useState } from "react";
import { Image, View, Text, TouchableOpacity, ToastAndroid, Alert } from "react-native";
import { styles } from "./styles";
import { Link } from '@react-navigation/native';
import { InputIcon } from "../../../components/InputIcon";
import { loginEmailPass } from "../../../services/firebase/authentication";

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState<string>("");
  const [password, setPass] = useState<string>("");

  async function handleLogin() {
    try {
      const res = await loginEmailPass(email, password);
      if(res.ok) navigation.navigate("Home")
    } catch (err:any) {
      Alert.alert(err.message);
      console.log(err.message);
    }
  }

  return (
    <View style={styles.mainContainer}>
      <View style={{ marginBottom: 50, alignItems: "center" }}>
        <Image source={require("../../../../assets/icon.png")} style={styles.logo} />
        <Text style={styles.title}>Aproveite o mundo do entretenimento.</Text>
      </View>
      <View>
        <InputIcon setInpValue={setEmail} icon="mail" width={300} placeholder="E-mail ou número de telefone" />
        <InputIcon setInpValue={setPass} icon="lock" width={300} placeholder="Senha" passwordType />
        <Link style={styles.recover} to={{ screen: "Recover" }}>Esqueceu a senha?</Link>
      </View>
      <TouchableOpacity
        onPress={handleLogin}
        style={styles.login}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Register")} style={styles.createAccount}>
        <Text style={styles.textButton}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  )
}
