import { useState } from "react";

import * as ImagePicker from "expo-image-picker";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Button from "../components/Button";
import CircleButton from "../components/CircleButton";
import EmojiList from "../components/EmojiList";
import EmojiPicker from "../components/EmojiPicker";
import EmojiSticker from "../components/EmojiSticker";
import IconButton from "../components/IconButton";
import ImageViewer from "../components/ImageViewer";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedPicture, setSelectedPicture] = useState<string>("");
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedEmoji, setSelectedEmoji] = useState<ImageSourcePropType | undefined>(undefined);


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

  const onCloseTheModal = ()=>{
    setIsModalVisible(false);
  }

  const onSaveImageAsync = async () => {
    //Plus tard
  }


  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedPicture} />
        {selectedEmoji && <EmojiSticker imageSize={50} stickerSource={selectedEmoji}/>}
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

      <EmojiPicker isVisible={isModalVisible} onClose={onCloseTheModal}>
        <EmojiList onSelect={setSelectedEmoji} onCloseModal={onCloseTheModal}/>
      </EmojiPicker>
    </GestureHandlerRootView>
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
