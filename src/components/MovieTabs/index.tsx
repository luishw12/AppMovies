import React from "react"
import { FlatList, Text, Pressable, View } from "react-native"
import { styles } from "./styles"

interface MoviesProps {
  title: string;
  url: string;
}

export const movieTabs: MoviesProps[] = [
  { title: "Assistindo", url: "/movie/now_playing" },
  { title: "Em breve", url: "/movie/upcoming" },
  { title: "Melhor avaliados", url: "/movie/top_rated" },
  { title: "Populares", url: "/movie/popular" },
]

export function MovieTabs({ setTab, activeTab }: any) {
  return (
    <FlatList
      data={movieTabs}
      showsHorizontalScrollIndicator={false}
      horizontal
      renderItem={({ item }: any) => {
        const textStyle = {
          ...styles.tabName,
          fontFamily: activeTab === item.url ? "Poppins-500" : "Poppins-400"
        };

        const handleTabPress = () => {
          setTab(item.url);
        };

        return (
          <View style={styles.tabContainer}>
            <>
              <Pressable onPress={handleTabPress} style={styles.tabButton}>
                <Text style={textStyle}>
                  {item.title}
                </Text>
              </Pressable>
              {activeTab === item.url && (
                <View style={styles.activeTab} />
              )}
            </>
          </View>
        );
      }}

    />
  )
}
