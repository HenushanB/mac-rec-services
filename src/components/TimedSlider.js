import {Text, View, StyleSheet, ScrollView} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import ServiceIcon from './Icons/ServiceIcon';

const TimedSlider = ({url, time, start, end}) => {
    return(
        <View style={[styles.slider]}>
            <Text>{start}</Text>
            <LinearGradient
                colors={['white', 'purple', 'white' ]}
                style={styles.linearGradient}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >
            <View style={{marginLeft: time}}>
            <ServiceIcon uri={url}/>
            </View>
            </LinearGradient>
            <Text>{end}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    slider: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        height: 30,
        width: 250,
    },
})

export default TimedSlider