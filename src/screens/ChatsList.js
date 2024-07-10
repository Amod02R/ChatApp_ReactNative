import { FlatList } from "react-native";
import ChatlistItem from "../components/chatlistItem";
import chats from "../../assets/data/chats.json";
const ChatsList = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ChatlistItem chat={item} />}
    />
  );
};

export default ChatsList;
