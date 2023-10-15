import { router, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Pressable, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Page() {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');

    const breedField = useRef();
    const weightField = useRef();
    const ageField = useRef();

    const API_BASE =
        process.env.NODE_ENV === 'development'
            ? process.env.EXPO_PUBLIC_DEV_API_URL
            : process.env.EXPO_PUBLIC_PRODUCTION_API_URL;

    const { id } = useLocalSearchParams();

    const fetchPet = useCallback(async () => {
        try {
            await fetch(`${API_BASE}/api/v1/pets/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.message === 'Pet Not Found') {
                        setName('');
                        setBreed('');
                        setWeight('');
                        setAge('');
                        router.replace('/pet');
                    } else {
                        setName(data.name);
                        setBreed(data.breed);
                        setWeight(data.weight);
                        setAge(data.age);
                    }
                });
        } catch (error) {
            console.error(error.message || 'Unexpected Error');
        }
    }, [id, API_BASE, router]);

    const savePet = async () => {
        try {
            await fetch(`${API_BASE}/api/v1/pets/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id, name, breed, weight, age })
            });
            router.replace('/');
        } catch (error) {
            console.error(error.message || 'Unexpected Error');
        }
    };

    const isFetchingPet = useRef(false);
    useEffect(() => {
        if (!isFetchingPet.current && id) {
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
        <View>
            <Text>Edit Pet</Text>
            <TextInput
                autoFocus
                placeholder='Name'
                inputMode='text'
                autoCapitalize='words'
                value={name}
                returnKeyType='next'
                blurOnSubmit={false}
                onChangeText={(newName) => setName(newName)}
                onSubmitEditing={() => {
                    breedField.current.focus();
                }}
            />
            <TextInput
                ref={breedField}
                placeholder='Breed'
                inputMode='text'
                autoCapitalize='words'
                value={breed}
                returnKeyType='next'
                blurOnSubmit={false}
                onChangeText={(newBreed) => setBreed(newBreed)}
                onSubmitEditing={() => {
                    weightField.current.focus();
                }}
            />
            <TextInput
                ref={weightField}
                placeholder='Weight'
                inputMode='numeric'
                value={weight.toString()}
                returnKeyType='next'
                blurOnSubmit={false}
                onChangeText={(newWeight) => setWeight(newWeight)}
                onSubmitEditing={() => {
                    ageField.current.focus();
                }}
            />
            <TextInput
                ref={ageField}
                placeholder='Age'
                inputMode='numeric'
                value={age.toString()}
                onChangeText={(newAge) => setAge(newAge)}
            />
            <Pressable
                onPress={() => {
                    handleSubmit();
                }}
            >
                <Text>Save</Text>
            </Pressable>
        </View>
    );
}
