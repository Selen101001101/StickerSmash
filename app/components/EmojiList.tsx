import { Image } from 'expo-image';
import { useState } from "react";
import { FlatList, ImageSourcePropType, Platform, Pressable, StyleSheet } from 'react-native';

type Props = {
    onSelect: (image: ImageSourcePropType) => void;
    onCloseModal: ()=>void
}

export default function EmojiList({ onSelect, onCloseModal }: Props) {
    const [emoji, setEmoji]=useState<ImageSourcePropType[]>([
        require("@/assets/images/emoji1.png"),
        require("@/assets/images/emoji2.png"),
        require("@/assets/images/emoji3.png"),
        require("@/assets/images/emoji4.png"),
        require("@/assets/images/emoji5.png"),
        require("@/assets/images/emoji6.png"),
        require("@/assets/images/background/BAE-Systems-Adaptable-Strike-Frigate-Concept.jpg"),
        require("@/assets/images/background/F-16-IRAK.jpg"),
        require("@/assets/images/background/F35.jpeg"),
        require("@/assets/images/background/thumb-1920-736461.png"),
        require("@/assets/images/background/thumb-1920-1188708.png"),
        require("@/assets/images/background/thumb-1920-1351258.png"),
    ])

    return(
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={Platform.OS === "web"}
            data={emoji}
            contentContainerStyle={styles.listContainer}
            renderItem={({item, index})=>(
                <Pressable onPress={()=>{
                    onSelect(item);
                    onCloseModal();
                }}>
                    <Image source={item} key={index} style={styles.image} />
                </Pressable>
            )}
        />
    )
}

const styles = StyleSheet.create({
    listContainer:{
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 15
    },
})