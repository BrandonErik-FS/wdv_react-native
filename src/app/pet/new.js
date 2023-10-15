import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Text, View, Pressable } from 'react-native';
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

    const savePet = async () => {
        try {
            await fetch(`${API_BASE}/api/v1/pets`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, breed, weight, age })
            });
            router.replace('/');
        } catch (error) {
            console.error(error.message || 'Unexpected Error');
        }
    };

    const handleSubmit = () => {
        savePet();
    };

    return (
        <View>
            <Text>Add Pet</Text>
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
