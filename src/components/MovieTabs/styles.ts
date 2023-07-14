import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tabContainer: {
    marginRight: 12,
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },

  tabButton: {
    height: 33,
  },

  tabName: {
    fontSize: 14,
    color: "#fff",
  },

  activeTab: {
    position: "absolute",
    bottom: 0,
    borderRadius: 5,
    width: "100%",
    height: 4,
    backgroundColor: "#3A3F47",
  },
});
