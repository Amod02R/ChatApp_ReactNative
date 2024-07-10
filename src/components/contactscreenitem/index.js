import { Pressable, StyleSheet, Text } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigation } from "@react-navigation/native";

const ContactScreenItem = (user) => {
  const nnavigation = useNavigation();

  return (
    <Pressable onPress={() => {}} style={s.container}>
      <Image src={{ url: user.image }} style={s.image} />
      <View style={s.content}>
        <Text style={s.name} numberOfLines={1}>
          {user.name}
        </Text>
        <Text style={s.name} numberOfLines={2}>
          {user.status}
        </Text>
      </View>
    </Pressable>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
    alignItems: "center",
  },
  image: { width: 60, height: 60, borderRadius: 30, marginRight: 10 },
  name: { fontWeight: "bold" },
  subtitle: { color: "gray" },
});
export default ContactScreenItem;
