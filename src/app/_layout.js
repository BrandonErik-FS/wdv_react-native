import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";

import Footer from "../components/Footer";
import Header from "../components/Header";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "ConcertOne-Regular": require("../../assets/fonts/ConcertOne-Regular.ttf"),
    "OpenSans-Regular": require("../../assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Bold": require("../../assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Slot />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#F49B42",
  },
});
