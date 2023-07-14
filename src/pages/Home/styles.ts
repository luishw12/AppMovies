import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    marginTop: 18,
    color: "#FFF",
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 24,
  },

  searchContainer: {
    backgroundColor: "#3A3F47",
    width: "100%",
    height: 45,
    display: "flex",
    borderRadius: 16,
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 22,
  },
  search: {
    color: "#67686D",
    fontFamily: "Poppins-400",
    width: "50%",
  },

  noResult: {
    color: "#FFF",
    fontFamily: "Poppins-600",
    textAlign: "center",
    marginHorizontal: 20,
    fontSize: 18,
  },
});
