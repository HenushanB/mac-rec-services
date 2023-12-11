import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback, Easing } from "react-native";
import React, {useState} from 'react';
import { useNavigation } from "@react-navigation/native";

const ButtonCapacity = props => {

    const navigation = useNavigation();
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
        navigation.navigate('Capacity_Screen');
    };
    return(
        <View>
            <TouchableWithoutFeedback onPress={animateButton}>
                <Animated.View style={[styles.button, {transform: [{scale: scaleValue}]}]}>
                    <Text style={styles.buttonText}> {props.percentage}% </Text>
                    <Text style={styles.buttonText}> {props.name} capacity </Text>
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
        width: 150,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
    }
})

export default ButtonCapacity;