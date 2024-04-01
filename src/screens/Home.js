import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>
                hello
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>
                    GO BACK!
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFC866',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#003057',
        borderRadius: 20,
        height: 50,
        width: "50%",
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15
    },
    buttonText: {
        color: '#FFFFFF'
    }
});