import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { auth } from '../../firebase';
import {BarChart} from 'react-native-chart-kit';
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3489FE',
    },

    infoContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    startContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    displayText: {
        fontSize: 38,
        color: 'black',
        fontFamily: 'Avenir-Roman',
        textAlign: 'center',
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
        width: 200,
        height: 50,
        marginRight: 40,
        marginLeft: 40,
    },
    chart: {
        marginBottom: 40,
        padding: 10,
        paddingTop: 20,
        borderRadius: 10,
        backgroundColor: '#DADADA',
        width: 370,
      },
      graphContainer: {
        justifyContent: 'center',
      }
});

export default function ProfilePage ({route, navigation}) {
    const [carbon , setCarbon] = React.useState(route.params.paramKey);
    const config = {
        hasXAxisBackgroundLines: false,
        xAxisLabelStyle: {
          position: 'left',
          suffix: ' lbs'
        }
      };
      

    return (
        <View style = {styles.container}>
            <View style = {styles.infoContainer}>
                <Text style = {styles.displayText}> Carbon Emissions: {carbon} </Text>
            </View>

        <View style = {styles.graphContainer}>
          <VerticalBarGraph
            data={[carbon, 400, 43]}
            labels={['You', 'Average', 'Ideal']}
            width={350}
            height={270}
            barRadius={5}
            barWidthPercentage={0.5}
            baseConfig={config}
            style={styles.chart}
          />
        </View>

            <View style = {styles.startContainer}>
                <TouchableOpacity 
                    style = {styles.button}
                    onPress= {() => navigation.navigate("StartTracking",{
                        paramKey: carbon})}>
                        <Text style = {styles.btnText}> Track More </Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}