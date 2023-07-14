import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  cardMovies: {
    width: "30%",
    height: 145,
    borderRadius: 16,
    backgroundColor: "#424242",
    marginRight: "5%",
    marginBottom: 18,
  },

  cardImage: {
    height: 145,
    width: "100%",
    borderRadius: 16,
  },

  card2: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  cardImage2: {
    width: 120,
    height: 70,
    borderRadius: 5,
    marginHorizontal: 10,
  },

  card2Text: {
    color: "#FFF",
    fontFamily: "Poppins-600",
    width: screenWidth - 190,
    marginRight: 10,
  },
});
