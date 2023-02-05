import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const styles = require('./style.js');

export default function StartTrackingPage ({route, navigation}) {
    const [carbon , setCarbon] = React.useState(route.params.paramKey);
    return (
        <View style = {styles.container}>
            <View style = {styles.quesContainer}>
                <Text style = {styles.quesText}> Start Your Daily Tracking! </Text>
            </View>

            

            <View style = {styles.inputMultiContainer}>
            <TouchableOpacity
                onPress= {() => navigation.navigate("Water Question 1",{
                    paramKey: carbon})}>
                    <Image
                        style = {styles.img}
                        source = {require('../assets/water.png')} 
                    />
                </TouchableOpacity>
                
                <TouchableOpacity
                onPress= {() => navigation.navigate("Home Energy Question 1",{
                    paramKey: carbon})}>
                    <Image
                        style = {styles.img}
                        source = {require('../assets/homeEnergy.png')} 
                    />
                </TouchableOpacity>
                
                <TouchableOpacity
                onPress= {() => navigation.navigate("Transportation Question 1",{
                    paramKey: carbon})}>
                   <Image
                        style = {styles.img}
                        source = {require('../assets/train.png')} 
                    />
                </TouchableOpacity>

                <TouchableOpacity
                onPress= {() => navigation.navigate("Waste Question 1",{
                    paramKey: carbon})}>
                   <Image
                        style = {styles.img}
                        source = {require('../assets/recycle.png')} 
                    />
                </TouchableOpacity>
            </View>

            <View style = {styles.nextContainer}>
                <TouchableOpacity 
                    style = {styles.nextBtn}
                    onPress= {() => navigation.navigate("Profile")}>
                        <Text style = {styles.nextBtnText}> {'<-'} </Text>
                    </TouchableOpacity>
            </View>

            
        </View>
    )
}

