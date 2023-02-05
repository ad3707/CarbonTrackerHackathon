import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const styles = require('../style.js');

export default function TransportationQ2 ({navigation}) {
    return (
        <View style = {styles.container}>
            <View style = {styles.quesContainer}>
                <Text style = {styles.quesText}> How many miles did you drive today? </Text>
            </View>

            <View style = {styles.inputMultiContainer}>
                <TouchableOpacity 
                    style = {styles.buttonMulti}>
                    <Text style = {styles.btnText}> {'< 25'} </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style = {styles.buttonMulti}>
                    <Text style = {styles.btnText}> 25 - 50 </Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style = {styles.buttonMulti}>
                    <Text style = {styles.btnText}> {'> 50'} </Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.nextContainer}>
                <TouchableOpacity 
                    style = {styles.nextBtn}
                    onPress= {() => navigation.navigate("Transportation Question 3")}>
                        <Text style = {styles.nextBtnText}> {'->'} </Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

