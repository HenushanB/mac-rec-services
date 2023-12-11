import {Text, View, StyleSheet, ScrollView} from 'react-native'
import ServiceIcon from '../components/Icons/ServiceIcon'
import data from '../../assets/Data'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import TimedSlider from '../components/TimedSlider'
import TimedChart from '../components/TimedChart'

export default function Capacity(){

    const navigation = useNavigation();

    const handleBack = () =>{
        navigation.goBack();
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack}>
                    <ServiceIcon uri={data.back}/>
                </TouchableOpacity>
                <Text style={{fontSize: 30, fontWeight:700, margin:20}}>Capacity</Text>
            </View>
            <View>
                <Text style={{fontSize: 20, fontWeight:300, margin:15}}>
                    Pulse Capacity
                </Text>
                <TimedSlider url={data.purple} time={70} start='6:00am' end='10:00pm'/>
                <TimedChart 
                    xAxis={["6", "8", "10", "12", "2", "4", "6", "8", "10"]}
                    yAxis={[5, 15, 35, 30, 50, 60, 70, 50, 15]}
                />
            </View>
            <View>
                <Text style={{fontSize: 20, fontWeight:300, margin:15}}>
                    Climbing Capacity
                </Text>
                <TimedSlider url={data.purple} time={150} start='11:00am' end='9:00pm'/>
                <TimedChart 
                    xAxis={["11", "1", "3", "5", "7", "9"]}
                    yAxis={[45, 65, 80, 75, 70, 45]}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white'
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10
    }
})