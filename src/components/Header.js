import { Link } from 'expo-router';
import { View, Image, StyleSheet } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Link href={props.linkTo}>
                <Image style={styles.image} source={props.logoSrc} />
            </Link>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#ffc357'
    },
    image: {
        width: 64,
        height: 64,
        borderRadius: 100
    }
});
