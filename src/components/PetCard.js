import { Pressable, StyleSheet, Text, View } from "react-native";

import formatDate from "../utils/formatDate";

const PetCard = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.infoHeading}>{props.name}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>
            Breed:
            <Text style={styles.infoTitle}>{props.breed}</Text>
          </Text>
          <Text style={styles.infoTitle}>
            Weight:
            <Text style={styles.infoTitle}>{props.weight}</Text>
          </Text>
          <Text style={styles.infoTitle}>
            Age: <Text style={styles.infoTitle}>{props.age}</Text>
          </Text>
          <Text style={styles.infoTitle}>
            Date Added:
            <Text style={styles.infoTitle}>{formatDate(props.created_at)}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.editButton} onPress={props.editPet}>
          <Text style={styles.editButtonText}>Edit</Text>
        </Pressable>
        <Pressable style={styles.deleteButton} onPress={props.deletePet}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PetCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#ffc357",
  },
  infoHeading: {
    textAlign: "center",
    margin: 0,
  },
  infoContainer: {
    width: "100%",
    flex: 2,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  infoTitle: {
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  infoValue: { fontWeight: "bold", textAlign: "center" },
  buttonContainer: {
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  editButton: {
    flex: 1,
    backgroundColor: "#ffffff",
    width: "100%",
    display: "block",
    padding: 8,
    borderRadius: 4,
    border: "none",
    textAlign: "center",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow:
      "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  },
  editButtonText: {
    color: "#212121",
    textAlign: "center",
    fontWeight: "bold",
  },
  deleteButton: {
    flex: 1,
    backgroundColor: "#af1827",
    width: "100%",
    display: "block",
    padding: 8,
    borderRadius: 4,
    border: "none",
    textAlign: "center",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow:
      "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  },
  deleteButtonText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
