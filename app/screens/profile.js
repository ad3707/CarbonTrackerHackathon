import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { auth } from '../../firebase';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3489FE',
    },

    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    infoContainer: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    title: {
        color: '#F9912C',
        fontSize: 50,
        textAlign: 'center',
        fontFamily: 'Avenir-Roman',
        fontWeight: 'bold',
    },

    emailText: {
        fontSize: 25,
        color: 'black',
        fontFamily: 'Avenir-Roman',
    }
});

export default function ProfilePage ({navigation}) {
    return (
        <View style = {styles.container}>
            <View style = {styles.titleContainer}>
                <Text style = {styles.title}>Profile</Text>
            </View>
            <View style = {styles.infoContainer}>
                <Text style = {styles.emailText}>Email: {auth.currentUser?.email} </Text>
            </View>
        </View>
    )
}