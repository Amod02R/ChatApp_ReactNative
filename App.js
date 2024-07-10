import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import ChatsList from "./src/screens/ChatsList";
import ChatScreen from "./src/screens/ChatScreen";
import Navigator from "./src/navigation";
//import { Amplify } from "aws-amplify";
//import awsconfig from "./src/aws-exports";
//import { withAuthenticator } from "aws-amplify-react-native";
import SignInScreen from "./src/screens/SignInScreen";

//Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

function App() {
  //const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default App;
