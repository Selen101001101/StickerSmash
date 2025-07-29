import { useState } from "react";

import * as ImagePicker from "expo-image-picker";
import { StyleSheet, View } from "react-native";
import Button from "../components/Button";
import ImageViewer from "../components/ImageViewer";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedPicture, setSelectedPicture] = useState<string>("")

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedPicture(result.assets[0].uri);
    } else {
      alert("Aucune image selectionnée");
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedPicture} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choisir une photo" onPress={pickImageAsync} />
        <Button label="Prendre cette photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
