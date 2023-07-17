import { TouchableOpacity, View, Text, TextInput, Image, ActivityIndicator, Pressable, ToastAndroid } from "react-native";
import { logout } from "../../../services/firebase/authentication";
import { auth, db } from "../../../services/firebase/firebase";
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from "react";
import { styles } from "./styles";
import { updateProfile } from "firebase/auth";
import { collection, getDocs, query, updateDoc, where } from "firebase/firestore";

export function Profile() {
  const name = auth.currentUser && auth.currentUser.displayName ? auth.currentUser.displayName : "";
  const [username, setUsername] = useState(name)
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState(auth.currentUser?.photoURL);

  const user = auth.currentUser;

  async function saveInfo() {
    if(!auth.currentUser) return;

    setIsEditable(!isEditable)

    if(!isEditable) return;
    await updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: profileImage,
    });

    const querySnapshot = await getDocs(query(collection(db, "users"), where("uid", "==", user!.uid)));

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0]

       const res = await updateDoc(doc.ref, { name: username })
       console.log(res)
    }
    
    ToastAndroid.show("Alterações salvas com sucesso!", ToastAndroid.SHORT)
  }

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    if (result.canceled) return

    const assets = result.assets[0];

    setProfileImage(assets.uri);
  };

  return (
    <>
      <View style={styles.main}>

        {/* Header */}
        <View style={styles.header}>
          <MaterialIcons onPress={() => logout()} name="logout" size={24} color="#c20000" />
          <Text style={styles.headerTitle}>Editar perfil</Text>
          <AntDesign onPress={saveInfo} name={isEditable ? "check" : "edit"} size={24} color={isEditable ? "#0296E5" :"gray"} />
        </View>

        {/* Profile Info */}
        <View style={styles.containerImage}>
          <Pressable disabled={!isEditable} style={styles.imageButton} onPress={pickImage} >
            {profileImage ? (
              <Image style={styles.profileImage} source={{
                uri: profileImage
              }} />
            ) : (
              <ActivityIndicator size={100} color="#0296e5" />
            )}
          </Pressable>
        </View>

        <TextInput placeholderTextColor="gray" editable={isEditable} style={{ ...styles.inputName, color: isEditable ? "white" : "#F0F0F0" }} placeholder="Nome" value={username ? username : ""} onChangeText={setUsername} />
      </View>
    </>
  )
}
