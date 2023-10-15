import { router } from 'expo-router';
import { Pressable, Text } from 'react-native';
import { StyleSheet } from 'react-native';

const AddPetButton = () => {
    const NavigateToPetForm = () => {
        router.push('/pet/new');
    };

    return (
        <Pressable style={styles.pressable} onPress={NavigateToPetForm}>
            <Text style={styles.text}>Add Pet</Text>
        </Pressable>
    );
};

export default AddPetButton;

const styles = StyleSheet.create({
    pressable: {
        position: 'fixed',
        bottom: 0,
        right: 0,
        padding: 16,
        margin: 32,
        backgroundColor: '#af1827',
        color: '#ffffff',
        display: 'block',
        borderRadius: 8,
        border: 'none',
        boxShadow:
            'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
    },
    text: {
        color: '#ffffff',
        fontWeight: 'bold'
    }
});