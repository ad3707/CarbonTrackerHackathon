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
    },
    nextBtn: {
        borderRadius: 50, 
        backgroundColor: '#2C7EF1',
        width: 50,
        height: 50,
    },
    nextContainer: {
        flex: 3,
        alignItems: 'flex-end',
        marginRight: 20,
    },

    nextBtnText: {
        marginLeft: 9,
        marginTop: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    }
});

export default function TransportationQ3 ({navigation}) {
    const [text, onChangeText] = React.useState('Enter')
    return (
        <View style = {styles.container}>
            <View style = {styles.quesContainer}>
                <Text style = {styles.quesText}> Did you take public transportation today? </Text>
            </View>

            <View style = {styles.inputContainer}>
                <TouchableOpacity 
                    style = {styles.button}>
                    <Text style = {styles.btnText}> Yes </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style = {styles.button}>
                    <Text style = {styles.btnText}> No </Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.nextContainer}>
                <TouchableOpacity 
                    style = {styles.nextBtn}
                    onPress= {() => navigation.navigate("Transportation Question 4")}>
                        <Text style = {styles.nextBtnText}> {'->'} </Text>
                    </TouchableOpacity>
            </View>

        </View>
    )
}

