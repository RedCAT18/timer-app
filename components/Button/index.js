import React from 'react';
import PropTypes from 'prop-types';
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
        //touchableOpacity: 누르면 투명해짐
        //touchableHighlight: 누르면 밝아짐
        <TouchableOpacity onPressOut={onPress}>
            <FontAwesome name={iconName} size={100} color={'white'}/>
        </TouchableOpacity>
    );    
}


Button.propTypes = {
    iconName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
};

