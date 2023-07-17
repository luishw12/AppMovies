import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    height: "100%",
    backgroundColor: "#242a32",
    flexDirection: "column",
    paddingTop: StatusBar.currentHeight,
    padding: 10,
    gap: 30,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
  },

  headerTitle: {
    textAlign: "center",
    fontFamily: "Poppins-600",
    color: "white",
    fontSize: 26,
  },

  containerImage: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },

  imageButton: {
    overflow: "hidden",
    borderRadius: 50,
    height: 100,
    width: 100,
  },

  profileImage: {
    height: 100,
    width: 100,
  },

  inputName: {
    borderColor: "#67686D",
    backgroundColor: "#323236",
    borderWidth: 2,
    fontFamily: "Poppins-500",
    fontSize: 18,
    color: "white",
    textAlign: "center",
    padding: 8,
    width: "100%",
  },

  edit: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  textButton: {
    fontFamily: "Poppins-600",
    color: "gray",
    fontSize: 16,
  },

  logout: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  logoutText: {
    fontFamily: "Poppins-600",
    color: "#c20000",
    fontSize: 18,
  },
});
