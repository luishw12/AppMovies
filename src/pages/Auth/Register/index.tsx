import React, { useState } from "react";
import { Image, View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import { styles } from "./styles";
import { registerEmailPass } from "../../../services/firebase/authentication";
import { InputIcon } from "../../../components/InputIcon";

export default function Register({ navigation }: any) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPass] = useState<string>("");

  async function handleRegister() {
    try {
      const res = await registerEmailPass(name, email, password);
      ToastAndroid.show(res.message, ToastAndroid.SHORT)
      if (res.ok) navigation.navigate("Home")
    } catch (err: any) {
      ToastAndroid.show(err.message, ToastAndroid.SHORT);
      console.log(err.message);
    }
  }

  return (
    <View style={styles.mainContainer}>
      <View style={{ marginBottom: 50, alignItems: "center" }}>
        <Image source={require("../../../../assets/icon.png")} style={styles.logo} />
        <Text style={styles.title}>Começe seu teste gratuito de 30 dias</Text>
      </View>
      <View>
        <InputIcon setInpValue={setName} icon="user" width={300} placeholder="Nome" />
        <InputIcon setInpValue={setEmail} icon="mail" width={300} placeholder="E-mail ou número de telefone" />
        <InputIcon setInpValue={setPass} icon="lock" width={300} placeholder="Senha" passwordType />
      </View>
      <TouchableOpacity 
        onPress={handleRegister} 
        style={styles.login}>
        <Text style={styles.textButton}>Criar Conta</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.createAccount}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}
