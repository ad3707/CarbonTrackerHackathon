import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const styles = require('../style.js');

export default function WaterQ1 ({route,navigation}) {
    const [carbon , setCarbon] = React.useState(route.params.paramKey);
    return (
        <View style = {styles.container}>
            <View style = {styles.quesContainer}>
                <Text style = {styles.quesText}> How long did you shower today? </Text>
            </View>

            <View style = {styles.inputMultiContainer}>
                <TouchableOpacity 
                    onPress= {() => setCarbon(carbon + 1)}
                    style = {styles.buttonMulti}>
                    <Text style = {styles.btnText}> 5 mins </Text>
                
                </TouchableOpacity>

                
                <TouchableOpacity 
                    onPress= {() => setCarbon(carbon + 2)}
                    style = {styles.buttonMulti}>
                    <Text style = {styles.btnText}> 10 mins </Text>
                    
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress= {() => setCarbon(carbon + 3)}
                    // onPress= {() => setCarbon(Number(carbon[15]) + 3)}
                    style = {styles.buttonMulti}>
                    <Text style = {styles.btnText}> 15 mins </Text>
                    
                </TouchableOpacity>
                
                <TouchableOpacity 
                    onPress= {() => setCarbon(carbon + 4)}
                    style = {styles.buttonMulti}>
                    <Text style = {styles.btnText}> {'>'} 20 mins </Text>
                </TouchableOpacity>
            </View>


            <View style = {styles.nextContainer}>
                <TouchableOpacity 
                    style = {styles.nextBtn}    
                        onPress= {() => navigation.navigate("Water Question 2",{
                            paramKey: carbon})}>
                        <Text style = {styles.nextBtnText}> {'>'} </Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

