import { router } from "expo-router";
import { Image, Pressable, StyleSheet, View } from "react-native";

const Header = (props) => {
  const NavigateHome = () => {
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={NavigateHome}>
        <Image
          style={styles.image}
          source={require("../../assets/images/app-icon.png")}
          resizeMode="cover"
          resizeMethod="scale"
        />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#ffc357",
  },
  image: { width: 82, height: 82, borderRadius: 100 },
});
