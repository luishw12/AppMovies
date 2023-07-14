import React from "react";
import { Image, Pressable, Text } from "react-native";
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
}

interface Props {
  data: Movie;
  variant?: "primary" | "secondary";
  navigation: any;
  onPress?: () => void;
}

export function MovieContainer({ data, variant = "primary", navigation, ...rest }: Props) {

  switch (variant) {
    default:
      return (
        <Pressable onPress={() => navigation.navigate("Details", { id: data.id })} {...rest} style={styles.cardMovies}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${data.poster_path}`
            }}
            style={styles.cardImage}
          />
        </Pressable>
      )
    case "secondary":
      return (
        <Pressable onPress={() => navigation.navigate("Details", { id: data.id })} {...rest} style={styles.card2}>
          <Image source={{
            uri: `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`
          }}
            style={styles.cardImage2}
          />
          <Text style={styles.card2Text}>{data.title}</Text>
          <AntDesign name="playcircleo" size={24} color="white" />
        </Pressable>
      )
  }
}
