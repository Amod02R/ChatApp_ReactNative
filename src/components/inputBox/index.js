import { StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const InputBox = () => {
  const [message, setMessage] = useState("");
  const onSend = () => {
    console.warn(message);
    setMessage("");
  };
  return (
    <SafeAreaView edges={["bottom"]} style={s.row}>
      <View style={s.row}>
        <AntDesign name="plus" size={24} color="royalblue"></AntDesign>
        <TextInput style={s.input} value={message} onChangeText={setMessage} />
        <MaterialIcons
          name="send"
          size={24}
          style={s.send}
          onPress={onSend}
        ></MaterialIcons>
      </View>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  row: { flexDirection: "row", padding: 5, alignItems: "center" },
  input: {
    fontSize: 18,
    flex: 1,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
    marginHorizontal: 10,
  },
  send: {
    backgroundColor: "royalblue",
    color: "white",
    borderRadius: 18,
    padding: 8,
    overflow: "hidden",
    justifyContent: "center",
  },
});
export default InputBox;
