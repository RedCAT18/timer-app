import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform,
    StatusBar
} from 'react-native';

class Timer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'} />
                <View style={styles.upperView}>
                    <Text style={styles.time}>25:00</Text>
                </View>
                <View style={styles.lowerView}>
                    <Text>Buttons Here</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0061ce',
    },
    upperView: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lowerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    time: {
        color: '#fff',
        fontSize: 120,
        ...Platform.select({
            ios: {
                fontWeight: '100',
            },
            android: {
                fontFamily: 'sans-serif-thin',
            },
        }),
    }
});


export default Timer;

