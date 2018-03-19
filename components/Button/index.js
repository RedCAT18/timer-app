import React from 'react';
import PropTyles from 'prop-types';
import {
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { fontAwesome } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default Button;

function Button({ iconName, onPress }){
    return (
        <TouchableOpacity>
            <FontAwesome name={iconName} size={80} color={'white'}/>
        </TouchableOpacity>
    );    
}
