import { FlatList } from "react-native";
import chats from "../../assets/data/chats.json";
import ContactScreenItem from "../components/contactscreenitem";

const ContactsScreen = () => {
  return (
    <FlatList
      data={chats}
      renderItem={(item) => <ContactScreenItem user={item.user} />}
      style={{ backgroundColor: "white" }}
    />
  );
};

export default ContactsScreen;
