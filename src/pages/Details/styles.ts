import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
  },

  headerTitle: {
    color: "white",
    fontFamily: "Poppins-600",
    fontSize: 16,
  },

  bannerInfo: {
    position: "relative",
  },

  backdropImage: {
    width: "100%",
    height: 210,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },

  imageAndTitle: {
    flexDirection: "row",
    alignItems: "flex-end",
    position: "absolute",
    bottom: -60,
    marginHorizontal: 30,
  },

  posterImage: {
    width: 95,
    height: 140,
    borderRadius: 16,
  },

  title: {
    fontFamily: "Poppins-600",
    color: "#FFF",
    paddingLeft: 20,
    width: 250,
    fontSize: 18,
  },

  movieInfos: {
    marginTop: 76,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 50,
    marginVertical: 8,
  },

  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  infoText: {
    color: "#92929D",
    fontFamily: "Poppins-400",
    marginLeft: 5,
  },

  footer: {
    marginTop: 30,
    marginHorizontal: 30,
  },

  footerTitle: {
    color: "#FFF",
    fontFamily: "Poppins-600",
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20,
  },

  aboutMovie: {
    color: "#FFF",
    fontFamily: "Poppins-400",
    fontSize: 14,
    textAlign: "justify",
  },
});
