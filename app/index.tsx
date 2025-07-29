import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page d&apos;accueil</Text>
      <Text style={styles.text}>Aller vers <Link href="/about" style={styles.button}>à propos </Link> </Text>
      
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
  }
})