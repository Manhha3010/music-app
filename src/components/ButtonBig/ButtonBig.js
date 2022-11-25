import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";

const ButtonBig = (props) => {
  return (
    <LinearGradient
      cstart={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#4c669f", "#3b5998"]}
      style={styles.buttonContainer}
    >
      <Text style={styles.btnText}>{props.text}</Text>
    </LinearGradient>
  );
};

export default ButtonBig;
