import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const styles = require('../style.js');


export default function WaterQ3 ({route,navigation}) {
    const [carbon , setCarbon] = React.useState(route.params.paramKey);
    return (
        <View style = {styles.container}>
            <View style = {styles.quesContainer}>
                <Text style = {styles.quesText}> Did you turn off the water when brushing your teeth? </Text>
            </View>

            <View style = {styles.inputContainer}>
                <TouchableOpacity 
                    style = {styles.button}>
                    <Text style = {styles.btnText}> Yes </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress= {() => setCarbon(carbon + 1)}
                    style = {styles.button}>
                    <Text style = {styles.btnText}> No </Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.nextContainer}>
                <TouchableOpacity 
                    style = {styles.nextBtn}
                    onPress= {() => navigation.navigate("Water Question 4",{
                        paramKey: carbon})}>
                        <Text style = {styles.nextBtnText}> {'Next'} </Text>
                    </TouchableOpacity>
            </View>

        </View>
    )
}

