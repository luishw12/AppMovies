import { Link } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, View, Text, Image } from "react-native";
import { api } from "../../services/api";
import { styles } from "./styles";

export function Popular() {
  const [featuredMovies, setFeaturedMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await api.get("/movie/popular", {
          params: {
            page: 1,
            sort_by: "popularity.desc",
          },
        });

        const movies = response.data.results;
        setFeaturedMovies(movies);
      } catch (error) {
        console.log("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <View>
      <FlatList
        data={featuredMovies}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }: { item: any, index: number }) => {

          if (index >= 10) {
            return null;
          }

          return (
            <Link to={{ screen: "Details", params: { id: item.id } }} style={styles.popularFilm}>
              <View style={styles.popularFilm}>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                  }}
                  resizeMode="cover"
                  style={styles.popularImage}
                />
                <Text style={styles.popularPositionShadow}>{index + 1}</Text>
                <Text style={styles.popularPosition}>{index + 1}</Text>
              </View>
            </Link>
          )
        }}
      />
    </View>
  );
}
