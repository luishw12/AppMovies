import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  popularFilm: {
    position: "relative",
    marginRight: 20,
    marginBottom: 60,
    marginLeft: 15,
  },

  popularImage: {
    width: 150,
    height: 210,
    borderRadius: 16,
  },

  popularPosition: {
    color: "#242A32",
    fontFamily: "Poppins-500",
    position: "absolute",
    fontSize: 96,
    left: -10,
    bottom: -18,
    height: 90,
  },

  popularPositionShadow: {
    color: "transparent",
    fontFamily: "Poppins-500",
    position: "absolute",
    textShadowColor: "#0296E5",
    textShadowRadius: 4,
    fontSize: 96,
    left: -10,
    bottom: -18,
    height: 90,
  },
});
