import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { StyleSheet, Text, View } from "react-native";
dayjs.extend(relativeTime);

const Message = ({ message }) => {
  const isMyMessage = () => {
    return message.user.id === "u1";
  };
  return (
    <View
      style={[
        styles.msg,
        {
          backgroundColor: isMyMessage() ? "#bd9d9d" : "#f5ecec",
          alignSelf: isMyMessage() ? "flex-end" : "flex-start",
        },
      ]}
    >
      <Text style={styles.text}>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  msg: {
    margin: 5,
    padding: 10,
    maxWidth: "70%",
    borderRadius: 14,
  },
  text: {
    fontSize: 16,
  },
  time: { alignSelf: "flex-end", fontSize: 12, color: "black", marginTop: 4 },
});
export default Message;
