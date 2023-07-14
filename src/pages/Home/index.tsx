import React, { useEffect, useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, ActivityIndicator, Pressable } from "react-native";
import { styles } from "./styles";
import { Feather } from '@expo/vector-icons';
import { Popular } from "../../components/Popular";
import { api } from "../../services/api";
import { MovieContainer } from "../../components/MovieContainer";
import { MovieTabs } from './../../components/MovieTabs/index';

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

export function Home({ navigation }: any) {
  const searchRef = useRef<TextInput>(null);
  const flatListRef = useRef<FlatList>(null);

  const [discoveryMovies, setDiscoveryMovies] = useState<Movie[]>([]);
  const [searchResultMovies, setSearchResultMovies] = useState<Movie[]>([]);
  const [movieTab, setMovieTab] = useState<string>("/movie/now_playing")
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [noResult, setNoResult] = useState<boolean>(false);

  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    loadMoreData();
  }, [])

  useEffect(() => {
    loadMoreData(true);
  }, [movieTab])

  useEffect(() => {
    setSearchResultMovies([]);
  }, [searchValue])

  async function loadMoreData(resetList = false) {
    setLoading(true);

    if (resetList) {
      setDiscoveryMovies([])
    }
    const response = await api.get(movieTab, {
      params: {
        page,
      }
    });

    setLoading(false);

    if (resetList) {
      setDiscoveryMovies(response.data.results);
      if (flatListRef.current) {
        flatListRef.current.scrollToOffset({ offset: 0, animated: true });
      }
      setPage(1);
      return;
    }
    setDiscoveryMovies([...discoveryMovies, ...response.data.results]);
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
    <View style={{ padding: 24, backgroundColor: "#242A32", height: "110%" }}>
      <Text style={styles.title}>O que você deseja assistir?</Text>
      <TouchableOpacity onPress={() => searchRef.current && searchRef.current.focus()} style={styles.searchContainer}>
        <TextInput value={searchValue} onChangeText={handleSearch} ref={searchRef} placeholder="Buscar" placeholderTextColor={"#67686D"} style={styles.search} />
        <Feather name="search" size={22} color="#67686D" />
      </TouchableOpacity>

      {noResult && (
        <Text style={styles.noResult}>
          Nenhum filme encontrado para "{searchValue}"
        </Text>
      )}

      {searchValue.length <= 2 && (
        <>
          <Popular />

          <View style={{ marginBottom: 20 }}>
            <MovieTabs setTab={setMovieTab} activeTab={movieTab} />
          </View>
        </>
      )}

      <FlatList
        ref={flatListRef}
        data={searchValue.length <= 2 ? discoveryMovies : searchResultMovies}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id + ""}
        renderItem={({ item }) => <MovieContainer navigation={navigation} data={item} />}
        onEndReached={() => loadMoreData()}
        onEndReachedThreshold={0.5}
      />
      {loading && <ActivityIndicator size={50} color="#0296e5" />}
    </View >
  )
}
