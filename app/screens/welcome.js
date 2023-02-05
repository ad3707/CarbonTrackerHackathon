import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3489FE',
    },

    titleContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },

    blurbContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },

    title: {
        color: '#F9912C',
        fontWeight: 'bold',
        fontSize: 100,
        textAlign: 'center',
        fontFamily: 'Avenir-Roman',
    },

    blurbText: {
        fontSize: 25,
        color: 'white',
        fontFamily: 'Avenir-Roman',
        textAlign: 'center',
    }
});

export default function WelcomePage ({navigation}) {
    setTimeout(() => { navigation.navigate('SignUp')}, 2500);
    
    return (
        <View style = {styles.container}>
            <View style = {styles.titleContainer}>
                <Text style = {styles.title}> Carbon Tracker </Text>
            </View>
            <View style = {styles.blurbContainer}>
                <Text style = {styles.blurbText}> See how your daily habits impact carbon emissions </Text>
            </View>
        </View>
    )
}

