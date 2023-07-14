import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#3A3F47",
    color: "#67686D",
    marginBottom: 20,
  },

  noResult: {
    color: "#FFF",
    fontFamily: "Poppins-600",
    textAlign: "center",
    marginHorizontal: 20,
    fontSize: 18,
  },
});
