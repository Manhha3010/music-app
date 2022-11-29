import { Text, View, TouchableOpacity, FlatList, Image } from "react-native";

const data = [
  {
    name: "Hahah",
    image: "../../assets/img/lock.png",
  },
  {
    name: "Hahah",
    image: "../../assets/img/lock.png",
  },
  {
    name: "Hahah",
    image: "../../assets/img/lock.png",
  },
  {
    name: "Hahah",
    image: "../../assets/img/lock.png",
  },
];
const renderItem = (item) => {
  const img = item.item.image;
  console.log(typeof img);
  return (
    <View>
      <Text>{item.item.name}</Text>
      <Image
        source={{ uri: "https://reactjs.org/logo-og.png" }}
        style={{ width: 30, height: 30 }}
      />
    </View>
  );
};

export default function NewSong(props) {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 24,
          paddingVertical: 10,
        }}
      >
        <Text>NewSong</Text>
        <TouchableOpacity>
          <Text>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal={true}
        data={data}
        key={Math.random()}
        renderItem={renderItem}
      />
    </View>
  );
}
