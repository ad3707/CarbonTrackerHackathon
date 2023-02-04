import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    title: {
        color: '#97C23C',
        fontSize: 40,
    },
});

export default function WelcomePage ({navigation}) {
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}> Carbon Tracker </Text>
            <Text> See how your daily habits impact carbon emissions </Text>
        </View>
    )
}

