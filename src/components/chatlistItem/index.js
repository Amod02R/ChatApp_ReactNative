import { Image, Text, View, Pressable } from "react-native";
import { style } from "./ChatlistItem.style";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigation } from "@react-navigation/native";
dayjs.extend(relativeTime);

export default function ChatlistItem({ chat }) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("chat", { id: chat.id, name: chat.user.name })
      }
      style={style.container}
    >
      <Image
        source={{
          uri: chat.user.image,
        }}
        style={style.img}
      ></Image>
      <View style={style.box}>
        <View style={style.row}>
          <Text style={style.name}>{chat.user.name}</Text>
          <Text style={style.subtitle}>
            {dayjs(chat.lastMessage.createdAt).fromNow()}
          </Text>
        </View>
        <Text style={style.subtitle}>{chat.lastMessage.text}</Text>
      </View>
    </Pressable>
  );
}
