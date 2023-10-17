import { router } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";

import AddPetButton from "../components/AddPetButton";
import PetCard from "../components/PetCard";

export default function Page() {
  const [pets, setPets] = useState(null);

  const API_BASE =
    process.env.NODE_ENV === "development"
      ? process.env.EXPO_PUBLIC_DEV_API_URL
      : process.env.EXPO_PUBLIC_PRODUCTION_API_URL;

  const fetchPets = useCallback(async () => {
    try {
      await fetch(`${API_BASE}/api/v1/pets`)
        .then((res) => res.json())
        .then((data) => {
          setPets(data);
        });
    } catch (error) {
      console.error(error.message || "Unexpected Error");
    }
  }, [API_BASE]);

  const editPet = (id) => {
    router.push(`/pet/${id}`);
  };

  const deletePet = async (id) => {
    try {
      await fetch(`${API_BASE}/api/v1/pets/${id}`, { method: "DELETE" });
      fetchPets();
    } catch (error) {
      console.error(error.message || "Unexpected Error");
    }
  };

  const isFetchingPets = useRef(false);
  useEffect(() => {
    if (!isFetchingPets.current) {
      fetchPets();
    }

    return () => {
      isFetchingPets.current = true;
    };
  }, [fetchPets]);

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Pets</Text>
        <AddPetButton />
      </View>
      <FlatList
        style={styles.flatList}
        data={pets}
        renderItem={({ item }) => (
          <PetCard
            name={item.name}
            breed={item.breed}
            weight={item.weight}
            age={item.age}
            created_at={item.created_at}
            editPet={() => editPet(item._id)}
            deletePet={() => deletePet(item._id)}
          />
        )}
        ListEmptyComponent={<Text style={styles.emptyMessage}>No Pets Found</Text>}
        ItemSeparatorComponent={<View style={styles.separator} />}
        ListFooterComponent={<View style={styles.separator} />}
        refreshControl={
          <RefreshControl refreshing={isFetchingPets.current} onRefresh={fetchPets} />
        }
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  title: { flex: 1, fontSize: 48, fontFamily: "ConcertOne-Regular", marginVertical: 16 },
  flatList: {
    width: "100%",
  },
  separator: {
    height: 16,
  },
  emptyMessage: {
    fontSize: 28,
    fontWeight: "normal",
    textAlign: "center",
    fontFamily: "ConcertOne-Regular",
  },
});
