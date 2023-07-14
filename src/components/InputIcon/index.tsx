import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { InputProps } from './inputProps';
import { styles } from "./styles";

export function InputIcon({ icon, placeholder, width = "100%", setInpValue, passwordType = false, color = "#67686D", defaultValue = ""}: InputProps) {
  const [inputValue, setInputValue] = useState(defaultValue);
  const inputRef = useRef<TextInput>(null);

  useEffect(()=> {
    setInpValue(inputValue)
  }, [inputValue])

  if(passwordType) {
    const [hidePass, setHidePass] = useState<boolean>(true);
    return (
      <Pressable onPress={() => inputRef.current && inputRef.current.focus()} style={{ ...styles.inputContainer, justifyContent: "space-between", borderBottomColor: color, width: width }}>
        <View style={{ flexDirection: "row" }}>
          <AntDesign name={icon} size={24} color={color} />
          <TextInput ref={inputRef} style={styles.input} value={inputValue} onChangeText={setInputValue} secureTextEntry={hidePass} placeholderTextColor={color} placeholder={placeholder} />
        </View>
        <AntDesign onPress={() => setHidePass(!hidePass)} name="eyeo" size={24} color={color} />
      </Pressable>
    )
  }
  return (
    <Pressable onPress={() => inputRef.current && inputRef.current.focus()} style={{ ...styles.inputContainer, borderBottomColor: color, width: width}}>
      <AntDesign name={icon} size={24} color={color} />
      <TextInput ref={inputRef} style={styles.input} value={inputValue} onChangeText={setInputValue} placeholderTextColor={color} placeholder={placeholder} />
    </Pressable>
  )
}
