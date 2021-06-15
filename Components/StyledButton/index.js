import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import styles from './style';

export default function StyledButton({type, content, onPress}) {

    // const type = type;
    // console.warn(type)

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

    return (
        <View style = {styles.container}>
            <Pressable
                style = {[styles.button, {backgroundColor: backgroundColor}]}
                onPress = {onPress}
            >
                <Text style ={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    )
}
