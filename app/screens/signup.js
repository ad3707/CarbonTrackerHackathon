import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3489FE',
    },

    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },

    inputText: {
        fontSize: 20,
        color: 'black',
        borderRadius: 5,
        backgroundColor: 'white',
        width: 250,
        height: 50,
        marginBottom: 30,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#F9912C',
        width: 120,
        height: 50,
        marginRight: 40,
        marginLeft: 40,
    },

    btnText: {
        fontSize: 20,
        color: 'black',
    },
});

export default function SignUpPage ({navigation}) {
    return (
        <View style = {styles.container}>
            <View style = {styles.inputContainer}>
                <TextInput style = {styles.inputText}> Email </TextInput>
                <TextInput style = {styles.inputText}> Password </TextInput>
            </View>

            <View style = {styles.btnContainer}>
                <TouchableOpacity 
                        style = {styles.button}>
                        <Text style = {styles.btnText}> Sign Up </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                        style = {styles.button}>
                        <Text style = {styles.btnText}> Login </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}