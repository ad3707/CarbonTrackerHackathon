import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },

    titleContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },

    blurbContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        color: '#97C23C',
        fontSize: 100,
        textAlign: 'center',
    },

    blurbText: {
        fontSize: 30,
        color: 'white',
    }
});

export default function WelcomePage ({navigation}) {
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

