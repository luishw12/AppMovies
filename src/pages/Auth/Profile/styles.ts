import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    height: "100%",
    backgroundColor: "#242a32",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 50
  },

  inputName: {
    backgroundColor: "#67686D",
    fontFamily: "Poppins-500",
    fontSize: 16,
    color: "white",
    padding: 10,
    width: 250,
    elevation: 3,
  },

  edit: {
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
