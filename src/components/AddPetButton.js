import { router } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

const AddPetButton = () => {
  const NavigateToPetForm = () => {
    router.push("/pet/new");
  };

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#822A34" : "#af1827",
        },
        styles.pressable,
      ]}
      onPress={NavigateToPetForm}>
      <Text style={styles.text}>Add Pet</Text>
    </Pressable>
  );
};

export default AddPetButton;

const styles = StyleSheet.create({
  pressable: {
    padding: 8,
    display: "block",
    borderRadius: 8,
    border: "none",
    elevation: 2,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    boxShadow:
      "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  },
  text: {
    color: "#ffffff",
    fontWeight: "bold",
    fontFamily: "OpenSans-Bold",
    fontSize: 16,
  },
});
