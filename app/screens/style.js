'use strict';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#95CFFD',
    },

    quesText: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    quesContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 50,
    },

    inputContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    inputMultiContainer: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnText: {
        fontSize: 25,
        color: 'white',
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#2377B9',
        width: 100,
        height: 50,
        marginRight: 40,
        marginLeft: 40,
    },

    buttonMulti: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#2377B9',
        width: 220,
        height: 50,
        marginRight: 40,
        marginLeft: 40,
        marginTop: 25,
    },
    nextBtn: {
        borderRadius: 50, 
        backgroundColor: '#2C7EF1',
        width: 50,
        height: 50,
    },
    nextContainer: {
        flex: 3,
        alignItems: 'flex-end',
        marginRight: 20,
    },

    nextBtnText: {
        marginLeft: 9,
        marginTop: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    }
});