import { View, StatusBar, Text, ActivityIndicator, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { api } from "../../services/api";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { auth, db } from "../../services/firebase/firebase";
import { LoginAlert } from "../../components/LoginAlert";
import { collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";

export function Details({ route, navigation }: any) {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<any>([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoritesList, setFavoritesList] = useState<any>([]);

  const { id } = route.params;

  const user = auth.currentUser;

  useEffect(() => {
    setIsFavorite(false);
    getFavorite()
  }, [route.params])

  useEffect(() => {
    getMovieInfo();
  }, [id])

  async function getMovieInfo() {
    setLoading(true);
    const response = await api.get(`/movie/${id}`)
    setLoading(false);
    setMovie(response.data);
  }

  async function getFavorite() {
    const querySnapshot = await getDocs(query(collection(db, "users"), where("uid", "==", user!.uid)));
    querySnapshot.forEach((doc) => {
      const favorites = doc.data().favorites;
      setFavoritesList(favorites)
      if (favorites) {
        favorites.forEach((favoriteId:string)=> {
          if (id == favoriteId) {
            setIsFavorite(true);
          }
        })
      }
    });
  }

  async function handleFavorite() {
    setIsFavorite(!isFavorite);

    let updatedFavorites: any = [];

    const querySnapshot = await getDocs(query(collection(db, "users"), where("uid", "==", user!.uid)));

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0]
      
      if(favoritesList.includes(movie.id)) {
        updatedFavorites = favoritesList.filter((fav:string)=> fav !== movie.id);
      } else {
        updatedFavorites = [ ...favoritesList, movie.id ]
      }

      await updateDoc(doc.ref, { favorites: updatedFavorites })
      getFavorite()
    }
  }

  if(!auth.currentUser) {
    return <LoginAlert navigation={navigation} />
  }

  if (loading) {
    return (
      <View style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#242A32" }}>
        <ActivityIndicator size={50} color="#0296e5" />
      </View>
    )
  }

  return (
    <View style={{ backgroundColor: "#242A32", paddingTop: StatusBar.currentHeight, height: "100%" }}>
      {/* Header */}
      <View style={styles.header}>
        <FontAwesome onPress={() => navigation.goBack()} style={{ padding: 15 }} name="angle-left" size={24} color="white" />
        <Text style={styles.headerTitle}>Detalhes</Text>
        <TouchableOpacity onPress={() => handleFavorite()}>
          <FontAwesome style={{ padding: 15 }} name={isFavorite ? "bookmark" :"bookmark-o"} size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Body */}
      <View>
        <View style={styles.bannerInfo}>
          <Image source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
          }}
            style={styles.backdropImage}
          />
          <View style={styles.imageAndTitle}>
            <Image source={{
              uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            }}
              style={styles.posterImage}
            />
            <Text style={styles.title}>{movie.title}</Text>
          </View>
        </View>
        <View style={styles.movieInfos}>
          <View style={styles.infoContainer}>
            <MaterialCommunityIcons name="calendar-blank-outline" size={16} color="#92929D" />
            <Text style={styles.infoText}>{movie.release_date && movie.release_date.split("-")[0]}</Text>
          </View>
          <View style={styles.infoContainer}>
            <MaterialCommunityIcons name="clock-time-three-outline" size={16} color="#92929D" />
            <Text style={styles.infoText}>{movie.runtime} Minutos</Text>
          </View>
          <View style={styles.infoContainer}>
            <MaterialCommunityIcons name="ticket-confirmation-outline" size={16} color="#92929D" />
            <Text style={styles.infoText}>{movie.genres && movie.genres[0].name}</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Sobre o filme</Text>
        <Text style={styles.aboutMovie}>{movie.overview}</Text>
      </View>

      {/* <Text style={{ color: "#FFF", fontFamily: "Poppins-600", textAlign: "center" }}>{JSON.stringify(movie.id)}</Text> */}
    </View >
  )
}
