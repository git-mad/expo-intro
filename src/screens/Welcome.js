import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function Welcome({ navigation }) {
    const [bckColor, setBckColor] = useState('#FFC866')
    return (
        <View style={styles.container} backgroundColor={bckColor}>
            <Image style={styles.image} source={require("../../assets/react-native-logo.png")}/>
            <Text>
                Welcome to this React Native app!!
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>
                    GO
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => 
            {
                if (bckColor == '#FFC866') {
                    setBckColor('#FF7F7F')
                } else {
                    setBckColor('#FFC866')
                }
            }
            }>
                <Text style={styles.buttonText}>
                    Change color
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
    image: {
        height: 200,
        width: 230,
        margin: 20,
        resizeMode: "stretch",
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