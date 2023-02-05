import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { auth } from '../../firebase';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3489FE',
    },

    infoContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    startContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    displayText: {
        fontSize: 40,
        color: 'black',
        fontFamily: 'Avenir-Roman',
    },
    btnText: {
        fontSize: 25,
        color: 'white',
        fontFamily: 'Avenir-Roman',
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#F9912C',
        width: 200,
        height: 50,
        marginRight: 40,
        marginLeft: 40,
    },
});

export default function ProfilePage ({route, navigation}) {
    const [carbon , setCarbon] = React.useState(route.params.paramKey);

    return (
        <View style = {styles.container}>
            <View style = {styles.infoContainer}>
                <Text style = {styles.displayText}> Carbon Points: {carbon} </Text>
            </View>

            <View style = {styles.startContainer}>
                <TouchableOpacity 
                    style = {styles.button}
                    onPress= {() => navigation.navigate("StartTracking",{
                        paramKey: carbon})}>
                        <Text style = {styles.btnText}> Track More </Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}