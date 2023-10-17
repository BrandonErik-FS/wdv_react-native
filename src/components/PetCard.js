import { Pressable, StyleSheet, Text, View } from "react-native";

import formatDate from "../utils/formatDate";

const PetCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.infoHeading}>{props.name}</Text>
        <View style={styles.metaContainer}>
          <Text style={styles.infoTitle}>
            Breed: <Text style={styles.infoValue}>{props.breed}</Text>
          </Text>
          <Text style={styles.infoTitle}>
            Weight: <Text style={styles.infoValue}>{props.weight}</Text>
          </Text>
          <Text style={styles.infoTitle}>
            Age: <Text style={styles.infoValue}>{props.age}</Text>
          </Text>
          <Text style={styles.infoTitle}>
            Date Added: <Text style={styles.infoValue}>{formatDate(props.created_at)}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#e4e4e4" : "#ffffff",
            },
            styles.editButton,
          ]}
          onPress={props.editPet}>
          <Text style={styles.editButtonText}>Edit</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#822A34" : "#af1827",
            },
            styles.deleteButton,
          ]}
          onPress={props.deletePet}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PetCard;

const styles = StyleSheet.create({
  container: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: "#ffc357",
    elevation: 2,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 15px 0px",
  },
  infoContainer: { width: "100%" },
  infoHeading: {
    textAlign: "center",
    marginVertical: 8,
    fontSize: 28,
    fontFamily: "ConcertOne-Regular",
  },
  metaContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginVertical: 8,
    gap: 8,
  },
  infoTitle: {
    margin: 0,
    padding: 0,
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "OpenSans-Bold",
  },
  infoValue: { fontWeight: "normal", fontSize: 16, fontFamily: "OpenSans-Regular" },
  buttonContainer: {
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  editButton: {
    flex: 1,
    width: "100%",
    display: "block",
    padding: 8,
    borderRadius: 4,
    border: "none",
    textAlign: "center",
    cursor: "pointer",
    elevation: 2,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    boxShadow:
      "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  },
  editButtonText: {
    color: "#212121",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "OpenSans-Bold",
  },
  deleteButton: {
    flex: 1,
    width: "100%",
    display: "block",
    padding: 8,
    borderRadius: 4,
    border: "none",
    textAlign: "center",
    cursor: "pointer",
    elevation: 2,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    boxShadow:
      "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  },
  deleteButtonText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "OpenSans-Bold",
  },
});
