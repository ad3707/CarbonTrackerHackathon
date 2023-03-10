'use strict';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3489FE',
    },

    quesText: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Avenir-Roman',
        textAlign: 'center',
    },

    quesContainer: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 100,
        marginRight: 10,
    },

    inputContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    inputMultiContainer: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
        width: 100,
        height: 50,
        marginLeft: 'auto',
        marginTop: 'auto',
        marginRight: 'auto',
        marginBottom: 'auto',
    },

    buttonMulti: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#F9912C',
        width: 220,
        height: 50,
        marginRight: 40,
        marginLeft: 40,
        marginTop: 25,
    },
    nextBtn: {
        borderRadius: 50, 
        backgroundColor: '#000000',
        width: 50,
        height: 50,
    },
    nextContainer: {
        flex: 2,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginRight: 20,
    },

    nextBtnText: {
        marginLeft: 'auto',
        marginTop: 'auto',
        marginRight: 'auto',
        marginBottom: 'auto',
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
    },

    img: {
        width: 70,
        height: 70,
        marginBottom: 30,
    },
});