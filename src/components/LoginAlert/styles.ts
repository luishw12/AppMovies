import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    height: "100%",
    backgroundColor: "#242a32",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
  },

  icon: {
    width: 250,
    height: 200,
  },

  title: {
    fontFamily: "Poppins-600",
    textAlign: "center",
    color: "white",
    fontSize: 24,
  },

  loginButton: {
    width: 300,
    backgroundColor: "#0296E5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    marginTop: 30,
  },

  registerButton: {
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
