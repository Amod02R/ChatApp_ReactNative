import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 5,
    marginHorizontal: 10,
    borderBottomColor: "lightgray",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 70,
    alignItems: "center",
  },
  img: { marginRight: 10, aspectRatio: 1, width: 60, borderRadius: 30 },
  box: { flex: 1 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  name: { fontWeight: "bold", fontSize: 20 },
  subtitle: { fontSize: 14, color: "grey" },
});
