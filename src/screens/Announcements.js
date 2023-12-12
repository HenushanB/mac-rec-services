import { ScrollView, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import ServiceIcon from '../components/ServiceIcon'
import data from '../../assets/Data'
import { useNavigation } from '@react-navigation/native'
import AnnouncementCard from "../components/AnnouncementCard";

const announcementMesages = [
    ['Services','Classes have changed dates','December 12, 2023 at 2:12pm | Yoga'],
    ["DropIns",'DropIns for Basketball cancelled today','December 11, 2023 at 9:52am | Basketball'],
    ["DropIns", 'Moved Location for Volleyball to Gymnasium 3 for Next week', 'December 9, 2023 at 10:22am | Volleyball'],
    ["Services", "New Pilates Session Starting Next Monday", "December 8, 2023 at 3:30pm | Pilates"],
    ["Services", "Upcoming Nutrition Workshop on December 10th", "December 7, 2023 at 11:15am | Nutrition"],
    ["DropIns", "Community Zumba Night!", "December 5, 2023 at 6:00pm | Zumba"],
    ["Services", "Gym Closure for Maintenance on December 12th", "December 5, 2023 at 1:45pm"],
    ["DropIns", "Additional Spin Class Added on Saturday Mornings", "December 4, 2023 at 8:30am | Spinning"]
]

export default function Announcement(){

    const navigation = useNavigation();

    const handleBack = () =>{
        navigation.goBack();
    }

    const announcementList = announcementMesages.map((announcement, index) => {
        return(
            <AnnouncementCard
            key={index}
            category={announcement[0]}
            title={announcement[1]}
            desc={announcement[2]}    
        />
        )
    })

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack}>
                    <ServiceIcon uri={data.back}/>
                </TouchableOpacity>
                <Text style={{fontSize: 30, fontWeight:700, margin:20}}>Announcements</Text>
            </View>
            <ScrollView style={styles.container}>
                <View>
                    {announcementList}
                </View>
            </ScrollView>
        </View>
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