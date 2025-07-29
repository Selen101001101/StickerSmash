import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const PlaceholderImage = require('@/assets/images/background-image.png');


export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={PlaceholderImage} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9fb4fbff",
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    color: "#000000"
  },
  button:{
    fontSize: 20, 
    textDecorationLine: "underline",
    color: "#020072ff"
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
})