import { useState } from "react";

import * as ImagePicker from "expo-image-picker";
import { StyleSheet, View } from "react-native";
import Button from "../components/Button";
import CircleButton from "../components/CircleButton";
import EmojiPicker from "../components/EmojiPicker";
import IconButton from "../components/IconButton";
import ImageViewer from "../components/ImageViewer";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedPicture, setSelectedPicture] = useState<string>("");
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedPicture(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("Aucune image selectionnée");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  }

  const onAddSticker = () => {
    setIsModalVisible(true);
  }

  const onCloseModal = ()=>{
    setIsModalVisible(false);
  }

  const onSaveImageAsync = async () => {
    //Plus tard
  }


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedPicture} />
      </View>
      {
        showAppOptions? (<View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>) : (
          <View style={styles.footerContainer}>
        <Button theme="primary" label="Choisir une photo" onPress={pickImageAsync} />
        <Button label="Prendre cette photo" onPress={()=>{setShowAppOptions(true)}} />
      </View>
        )
      }

      <EmojiPicker isVisible={isModalVisible} onClose={onCloseModal}>
        {/* List of Emoji */}
      </EmojiPicker>
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
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
