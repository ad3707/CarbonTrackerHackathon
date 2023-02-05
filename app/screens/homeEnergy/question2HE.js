import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const styles = require('../style.js');

export default function HomeEnergyQ2 ({route,navigation}) {
    const [carbon , setCarbon] = React.useState(route.params.paramKey);

    return (
        <View style = {styles.container}>
            <View style = {styles.quesContainer}>
                <Text style = {styles.quesText}> Did you use your washing machine today? </Text>
            </View>

            <View style = {styles.inputMultiContainer}>
                <TouchableOpacity 
                    onPress= {() => setCarbon(carbon + 4)}
                    style = {styles.buttonMulti}>
                    <Text style = {styles.btnText}> Many Loads </Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    onPress= {() => setCarbon(carbon + 2)}
                    style = {styles.buttonMulti}>
                    <Text style = {styles.btnText}> 1 Full Load </Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    onPress= {() => setCarbon(carbon + 1)}
                    style = {styles.buttonMulti}>
                    <Text style = {styles.btnText}> 1 Partial Load </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style = {styles.buttonMulti}>
                    <Text style = {styles.btnText}> No </Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.nextContainer}>
                <TouchableOpacity 
                    style = {styles.nextBtn}
                    onPress= {() => navigation.navigate("Home Energy Question 3",{
                      paramKey: carbon})}>
                        <Text style = {styles.nextBtnText}> {'->'} </Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

