import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const styles = require('../style.js');

export default function TransportationQ2 ({route,navigation}) {
    const [carbon , setCarbon] = React.useState(route.params.paramKey);

    return (
        <View style = {styles.container}>
            <View style = {styles.quesContainer}>
                <Text style = {styles.quesText}> How many miles did you drive today? </Text>
            </View>

            <View style = {styles.inputMultiContainer}>
                <TouchableOpacity 
                    style = {styles.buttonMulti}>
                    <Text style = {styles.btnText}> 0 </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress= {() => setCarbon(carbon + 264)}
                    style = {styles.buttonMulti}>
                    <Text style = {styles.btnText}> 1 - 24 </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress= {() => setCarbon(carbon + 814)}
                    style = {styles.buttonMulti}>
                    <Text style = {styles.btnText}> 25 - 50 </Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    onPress= {() => setCarbon(carbon + 1100)}
                    style = {styles.buttonMulti}>
                    <Text style = {styles.btnText}> {'> 50'} </Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.nextContainer}>
                <TouchableOpacity 
                    style = {styles.nextBtn}
                    onPress= {() => navigation.navigate("Transportation Question 3",{
                        paramKey: carbon})}>
                        <Text style = {styles.nextBtnText}> {'Next'} </Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

