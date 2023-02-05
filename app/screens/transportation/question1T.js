import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const styles = require('../style.js');


export default function TransportationQ1 ({route,navigation}) {
    const [carbon , setCarbon] = React.useState(route.params.paramKey);

    return (
        <View style = {styles.container}>
            <View style = {styles.quesContainer}>
                <Text style = {styles.quesText}> How did you travel today? </Text>
            </View>

            <View style = {styles.inputMultiContainer}>
                <TouchableOpacity 
                    style = {styles.buttonMulti}>
                    <Text style = {styles.btnText}> Walk/Bike </Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    onPress= {() => setCarbon(carbon + 10)}
                    style = {styles.buttonMulti}>
                    <Text style = {styles.btnText}> Car </Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    onPress= {() => setCarbon(carbon + 2)}
                    style = {styles.buttonMulti}>
                    <Text style = {styles.btnText}> Bus </Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    onPress= {() => setCarbon(carbon + 2)}
                    style = {styles.buttonMulti}>
                    <Text style = {styles.btnText}> Metro/Train </Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.nextContainer}>
                <TouchableOpacity 
                    style = {styles.nextBtn}
                    onPress= {() => navigation.navigate("Transportation Question 2",{
                        paramKey: carbon})}>
                        <Text style = {styles.nextBtnText}> {'->'} </Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

