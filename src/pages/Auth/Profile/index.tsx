import React, { useState } from "react";
import { TouchableOpacity, View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import { auth } from "../../../services/firebase/firebase";
import { AntDesign } from '@expo/vector-icons';
import { logout } from "../../../services/firebase/authentication";

export function Profile() {
  const [username, setUsername] = useState(auth.currentUser?.displayName)
  const [isEditable, setIsEditable] = useState<boolean>(false);

  return (
    <>
      <View style={styles.main}>

        {/* Profile Info */}
        <TextInput editable={isEditable} style={{ ...styles.inputName, color: isEditable ? "white" : "#F0F0F0" }} placeholder="Nome" value={username ? username : ""} onChangeText={setUsername} />

        {isEditable ? (
          <TouchableOpacity onPress={() => setIsEditable(!isEditable)} style={styles.edit}>
            <Text style={{ ...styles.textButton, color: "#0296E5" }}>Salvar Alterações</Text>
            <AntDesign name="check" size={24} color="#0296E5" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setIsEditable(!isEditable)} style={styles.edit}>
            <Text style={{ ...styles.textButton, color: "gray" }}>Editar Perfil</Text>
            <AntDesign name="edit" size={24} color="gray" />
          </TouchableOpacity>
        )}

        {/* Logout Button */}
        <TouchableOpacity onPress={() => logout()} style={styles.logout}>
          <MaterialIcons name="logout" size={28} color="#c20000" />
          <Text style={{ ...styles.textButton, color: "#c20000" }}>Sair</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}
