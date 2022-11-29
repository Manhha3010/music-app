import { View, Text, SafeAreaView, Image, VirtualizedList } from "react-native";
import NewSong from "../../components/NewSong";

function HomeScreen() {
  const getItemCount = (data) => {
    return 5;
  };
  const DATA: never[] = [];
  const getItem = (data, index) => {
    return {
      id: index,
      title: index + 1,
    };
  };
  const list = ({ title }) => {
    switch (title) {
      case 1: {
        return <NewSong />;
      }
      default:
        break;
    }
  };
  return (
    <SafeAreaView>
      <View>
        <Image
          source={require("../../assets/img/logo-login-screen.png")}
          style={{ width: 48, height: 48, marginLeft: 30, marginTop: -30 }}
        />
      </View>
      <View>
        <VirtualizedList
          showsVerticalScrollIndicator={false}
          data={DATA}
          initialNumToRender={1}
          renderItem={({ item }) => list(item)}
          keyExtractor={(item) => item.id}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
