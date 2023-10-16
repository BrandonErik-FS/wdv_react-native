import { router, useLocalSearchParams } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Page() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");

  const breedField = useRef();
  const weightField = useRef();
  const ageField = useRef();

  const API_BASE =
    process.env.NODE_ENV === "development"
      ? process.env.EXPO_PUBLIC_DEV_API_URL
      : process.env.EXPO_PUBLIC_PRODUCTION_API_URL;

  const { id } = useLocalSearchParams();

  const fetchPet = useCallback(async () => {
    try {
      await fetch(`${API_BASE}/api/v1/pets/${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "Pet Not Found") {
            setName("");
            setBreed("");
            setWeight("");
            setAge("");
            router.replace("/pet");
          } else {
            setName(data.name);
            setBreed(data.breed);
            setWeight(data.weight);
            setAge(data.age);
          }
        });
    } catch (error) {
      console.error(error.message || "Unexpected Error");
    }
  }, [id, API_BASE, router]);

  const savePet = async () => {
    try {
      await fetch(`${id !== "new" ? `${API_BASE}/api/v1/pets/${id}` : `${API_BASE}/api/v1/pets`}`, {
        method: `${id !== "new" ? "PATCH" : "POST"}`,
        headers: { "Content-Type": "application/json" },
        body:
          id !== "new"
            ? JSON.stringify({ id, name, breed, weight, age })
            : JSON.stringify({ name, breed, weight, age }),
      });
      router.replace("/");
    } catch (error) {
      console.error(error.message || "Unexpected Error");
    }
  };

  const isFetchingPet = useRef(false);
  useEffect(() => {
    if (!isFetchingPet.current && id !== "new") {
      fetchPet();
    }

    return () => {
      isFetchingPet.current = true;
    };
  }, [fetchPet, id]);

  const handleSubmit = () => {
    savePet();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <Text style={styles.title}>{id !== "new" ? "Edit Pet" : "Add Pet"}</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          inputMode="text"
          autoCapitalize="words"
          value={name}
          returnKeyType="next"
          blurOnSubmit={false}
          cursorColor="#af1827"
          onChangeText={(newName) => setName(newName)}
          onSubmitEditing={() => {
            breedField.current.focus();
          }}
        />
        <TextInput
          style={styles.input}
          ref={breedField}
          placeholder="Breed"
          inputMode="text"
          autoCapitalize="words"
          value={breed}
          returnKeyType="next"
          blurOnSubmit={false}
          cursorColor="#af1827"
          onChangeText={(newBreed) => setBreed(newBreed)}
          onSubmitEditing={() => {
            weightField.current.focus();
          }}
        />
        <TextInput
          style={styles.input}
          ref={weightField}
          placeholder="Weight"
          inputMode="numeric"
          value={weight.toString()}
          returnKeyType="next"
          blurOnSubmit={false}
          cursorColor="#af1827"
          onChangeText={(newWeight) => setWeight(newWeight)}
          onSubmitEditing={() => {
            ageField.current.focus();
          }}
        />
        <TextInput
          style={styles.input}
          ref={ageField}
          placeholder="Age"
          inputMode="numeric"
          value={age.toString()}
          cursorColor="#af1827"
          onChangeText={(newAge) => setAge(newAge)}
        />
        <Pressable
          style={styles.submitButton}
          onPress={() => {
            handleSubmit();
          }}>
          <Text style={styles.submitButtonText}>Save</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 16,
    backgroundColor: "#f49b42",
  },
  title: {
    marginVertical: 16,
    fontSize: 48,
    fontFamily: "ConcertOne-Regular",
  },
  formContainer: {
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "1000px",
    display: "flex",
    gap: 8,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#ffc357",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 15px 0px",
  },
  input: {
    width: "100%",
    margin: 0,
    padding: 8,
    borderRadius: 4,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "transparent",
    backgroundColor: "#ffffff",
    fontSize: 16,
    fontFamily: "OpenSans-Regular",
  },
  submitButton: {
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
  submitButtonText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "OpenSans-Bold",
  },
});
