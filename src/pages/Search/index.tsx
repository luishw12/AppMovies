import React, { useEffect, useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, ActivityIndicator, Pressable, StatusBar } from "react-native";
import { styles } from "./styles";
import { Feather } from '@expo/vector-icons';
import { Popular } from "../../components/Popular";
import { api } from "../../services/api";
import { MovieContainer } from "../../components/MovieContainer";
import { MovieTabs } from './../../components/MovieTabs/index';
import { Movie } from "../Home";

export function Search({ navigation }: any) {
  const searchRef = useRef<TextInput>(null);
  const flatListRef = useRef<FlatList>(null);

  const [discoveryMovies, setDiscoveryMovies] = useState<Movie[]>([]);
  const [searchResultMovies, setSearchResultMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [noResult, setNoResult] = useState<boolean>(false);

  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    loadMoreData();
  }, [])

  useEffect(() => {
    setSearchResultMovies([]);
  }, [searchValue])

  async function loadMoreData() {
    setLoading(true);

    const response = await api.get("/movie/popular", {
      params: {
        page,
      }
    });

    setDiscoveryMovies([...discoveryMovies, ...response.data.results]);
    setLoading(false);
    setPage(page + 1);
  }

  function handleSearch(text: string) {
    setSearchValue(text);

    if (text.length >= 2) {
      searchMovies(text);
      return;
    }

    setSearchResultMovies([]);
  }

  async function searchMovies(query: string) {
    setLoading(true);
    const response = await api.get("/search/movie", {
      params: {
        query,
      }
    });

    if (response.data.results.length === 0) {
      setNoResult(true);
      return;
    }
    setNoResult(false);
    setSearchResultMovies(response.data.results);
  }

  return (
    <View style={{ backgroundColor: "#242A32", paddingTop: StatusBar.currentHeight, height: "100%" }}>
      <TouchableOpacity onPress={() => searchRef.current && searchRef.current.focus()} style={styles.searchContainer}>
        <TextInput value={searchValue} onChangeText={handleSearch} ref={searchRef} placeholder="Busque por filmes ou séries" placeholderTextColor={"#67686D"} style={styles.search} />
        <Feather name="search" size={22} color="#67686D" />
      </TouchableOpacity>

      {noResult && (
        <Text style={styles.noResult}>
          Nenhum filme encontrado para "{searchValue}"
        </Text>
      )}

      <FlatList
        ref={flatListRef}
        data={searchValue.length <= 2 ? discoveryMovies : searchResultMovies}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id + ""}
        renderItem={({ item }) => <MovieContainer navigation={navigation} variant="secondary" data={item} />}
        onEndReached={() => loadMoreData()}
      />
      {loading && <ActivityIndicator size={50} color="#0296e5" />}
    </View >
  )
}
