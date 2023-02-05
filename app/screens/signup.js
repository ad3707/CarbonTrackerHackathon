import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { auth } from '../../firebase';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3489FE',
    },

    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },

    inputText: {
        fontSize: 15,
        color: 'black',
        borderRadius: 5,
        backgroundColor: 'white',
        width: 250,
        height: 50,
        marginBottom: 30,
        fontFamily: 'Avenir-Roman',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#F9912C',
        width: 120,
        height: 50,
        marginRight: 40,
        marginLeft: 40,
    },

    btnText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        fontFamily: 'Avenir-Roman',
    },
});



export default function SignUpPage ({navigation}) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    
    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate('Profile')
            }
        })

        return unsubscribe
    },[])
        
    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(userCredential => {
            const user = userCredential.user;
        })
        .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email,password)
        .then(userCredential => {
            const user = userCredential.user;
        })
        .catch(error => alert(error.message))
    }
    
    return (
        <View style = {styles.container}>
            <View style = {styles.inputContainer}>
                <TextInput 
                    style = {styles.inputText} 
                    placeholder ='Email'
                    value = {email}
                    onChangeText = {text => setEmail(text)}>
                </TextInput>

                <TextInput 
                    style = {styles.inputText} 
                    secureTextEntry 
                    placeholder='Password'
                    value = {password}
                    onChangeText = {text => setPassword(text)}>  
                </TextInput>
            </View>

            <View style = {styles.btnContainer}>
                <TouchableOpacity 
                        onPress = {handleSignUp}
                        style = {styles.button}>
                        <Text style = {styles.btnText}> Sign Up </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                        onPress = {handleLogin}
                        style = {styles.button}>
                        <Text style = {styles.btnText}> Login </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}