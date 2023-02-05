import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#95CFFD',
    },

    quesText: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    quesContainer: {
        flex: 0.5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 50,
    },

    inputContainer: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    btnText: {
        fontSize: 25,
        color: 'white',
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#2377B9',
        width: 100,
        height: 50,
        marginRight: 40,
        marginLeft: 40,
    }
});

export default function WaterQ1 ({navigation}) {
    const [text, onChangeText] = React.useState('Enter')
    return (
        <View style = {styles.container}>
            <View style = {styles.quesContainer}>
                <Text style = {styles.quesText}> How did you travel today? </Text>
            </View>

            <View style = {styles.inputContainer}>
                <TouchableOpacity 
                    style = {styles.button}>
                    <Text style = {styles.btnText}> Public Transport </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style = {styles.button}>
                    <Text style = {styles.btnText}> Walk/Bike </Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style = {styles.button}>
                    <Text style = {styles.btnText}> Car </Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style = {styles.button}>
                    <Text style = {styles.btnText}> Bus </Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style = {styles.button}>
                    <Text style = {styles.btnText}> Metro/Train </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

