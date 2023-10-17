import { router } from "expo-router";
import { Image, Pressable, StyleSheet, View } from "react-native";

const Header = (props) => {
  const NavigateHome = () => {
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#e4e4e4" : "#ffffff",
            borderRadius: 100,
            elevation: pressed ? 0 : 4,
            shadowColor: "#000000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: pressed ? 0 : 0.5,
            shadowRadius: 1,
          },
        ]}
        onPress={NavigateHome}>
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
