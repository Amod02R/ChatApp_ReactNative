import {
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
  Pressable,
} from "react-native";

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  return (
    <View style={s.container}>
      <Text style={[s.header, { height: height * 0.3 }]}>ChatApp</Text>
      <TextInput placeholder="Username" style={s.username}></TextInput>
      <TextInput placeholder="Password" style={s.password}></TextInput>
      <Pressable style={s.button} onPress={() => {}}>
        <Text style={s.title}>Sign In</Text>
      </Pressable>
    </View>
  );
};

const s = StyleSheet.create({
  container: { alignItems: "center", padding: 40 },
  header: { width: "70%", maxWidth: 500, maxHeight: 200, fontSize: 50 },
  username: {
    width: "100%",
    paddingHorizontal: 15,
    borderBottomWidth: 3,
    borderBottomColor: "black",
    marginVertical: 8,
  },
  password: {
    width: "100%",
    paddingHorizontal: 15,
    borderBottomWidth: 3,
    borderBottomColor: "black",
    marginVertical: 8,
  },
  button: {
    backgroundColor: "#3762f0",
    alignItems: "center",
    width: "100%",
    borderRadius: 6,
    padding: 15,
    marginVertical: 8,
  },
  title: {
    fontWeight: "bold",
    color: "white",
  },
});
export default SignInScreen;
