import { Feather, FontAwesome } from '@expo/vector-icons';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from "react"
import { View, Text, StatusBar, FlatList, ActivityIndicator } from "react-native"
import { LoginAlert } from '../../components/LoginAlert';
import { MovieContainer } from '../../components/MovieContainer';
import { api } from '../../services/api';
import { auth, db } from '../../services/firebase/firebase';
import { styles } from "./styles"

export function Favorites({ navigation }: any) {
  const [favoritesList, setFavoritesList] = useState<any>([]);
  const [favMovies, setFavMovies] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const user = auth.currentUser;

  if (!user) {
    return <LoginAlert navigation={navigation} />
  }

  async function getFavorite() {
    const querySnapshot = await getDocs(
      query(collection(db, "users"), where("uid", "==", user!.uid))
    );
    querySnapshot.forEach((doc) => {
      const favorites = doc.data().favorites;
      setFavoritesList(favorites);
    });
  }

  async function getFavoriteInfo(id: number) {
    const response = await api.get(`/movie/${id}`);
    return response.data;
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      await getFavorite();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    setLoading(true);
    const fetchFavoriteMovies = async () => {
      const favoriteMovies = await Promise.all(
        favoritesList.map((favId: any) => getFavoriteInfo(favId))
      );
      setFavMovies(favoriteMovies);
      setLoading(false);
    };
    fetchFavoriteMovies();
  }, [favoritesList]);

  return (
    <View style={{ backgroundColor: "#242A32", paddingTop: StatusBar.currentHeight, height: "100%" }}>
      {/* Header */}
      <View style={styles.header}>
        <FontAwesome onPress={() => navigation.navigate('Home')} style={{ padding: 15 }} name="angle-left" size={24} color="white" />
        <Text style={styles.headerTitle}>Favoritos</Text>
        <View>
          <Feather name="info" size={24} color="white" />
        </View>
      </View>

      {/* No Result */}
      {!favMovies.length && (
        <Text style={styles.noResult}>
          Você ainda não possui filmes favoritos!
        </Text>
      )}

      {/* Movies */}
      <FlatList
        data={favMovies}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id + ""}
        renderItem={({ item }) => <MovieContainer navigation={navigation} variant="secondary" data={item} />}
      />

      {/* Loading */}
      {loading && <ActivityIndicator size={50} color="#0296e5" />}

    </View >
  )
}
