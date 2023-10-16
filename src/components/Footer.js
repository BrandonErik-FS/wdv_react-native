import { StyleSheet, Text, View } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.copyright}>Copyright &copy; {new Date().getFullYear()}</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 16,
    backgroundColor: "#ffc357",
  },
  copyright: {
    fontFamily: "OpenSans-Regular",
    fontSize: 16,
  },
});
