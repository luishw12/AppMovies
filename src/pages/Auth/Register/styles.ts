import { StatusBar, StyleSheet } from "react-native";

const statusBarHeight = StatusBar.currentHeight;

export const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: statusBarHeight,
    height: "100%",
    backgroundColor: "#242A32",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 250,
    height: 200,
  },

  title: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Poppins-600",
    fontSize: 16,
  },

  inputContainer: {
    flexDirection: "row",
    width: 300,
    alignItems: "center",
    borderBottomColor: "#67686D",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 30,
  },

  input: {
    marginLeft: 15,
    color: "#FFF",
  },

  recover: {
    color: "#FFF",
    fontFamily: "Poppins-500",
    fontSize: 12,
  },

  login: {
    width: 300,
    backgroundColor: "#0296E5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    marginTop: 30,
  },

  createAccount: {
    width: 300,
    borderColor: "#0296E5",
    borderWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    marginTop: 30,
  },

  textButton: {
    color: "white",
    textTransform: "uppercase",
    fontFamily: "Poppins-500",
  },
});
