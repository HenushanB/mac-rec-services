import { ScrollView, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import ServiceIcon from '../components/ServiceIcon'
import data from '../../assets/Data'
import { useNavigation } from '@react-navigation/native'

export default function Announcement(){

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
                <Text style={{fontSize: 30, fontWeight:700, margin:20}}>Announcements</Text>
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