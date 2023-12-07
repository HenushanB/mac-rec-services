import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback, Easing } from "react-native";
import React, {useState} from 'react';

const ButtonAnnouncement = props => {
    const [scaleValue] = useState(new Animated.Value(1));

    const animateButton = () => {
        Animated.timing(scaleValue, {
            toValue: 0.8,
            duration: 100,
            useNativeDriver: true
        }).start(() => {
            Animated.timing(scaleValue, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true
            }).start();
        });
    };
    return(
        <View>
            <TouchableWithoutFeedback onPress={animateButton}>
                <Animated.View style={[styles.button, {transform: [{scale: scaleValue}]}]}>
                    <Text style={styles.buttonText}> View {props.number} announcements </Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ECE6F0',
        borderRadius: 5,
        elevation: 5,
        margin: 10,
        width: 300,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 30,
        textAlign: 'center'
    }
})

export default ButtonAnnouncement;