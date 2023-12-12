import { StyleSheet, View, ScrollView, Text, TouchableOpacity} from 'react-native';
import Search from '../components/Search';
import ButtonCapacity from '../components/ButtonCapacity';
import ButtonAnnouncement from '../components/ButtonAnnouncement';
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react'
import ProfileModal from '../components/ProfileModal';
import data from '../../assets/Data';

export default function Home() {
    const [isProfileVisible, setIsProfileVisible] = useState(false);
    const handleModal = () => setIsProfileVisible(() => !isProfileVisible);

    return (
        <ScrollView style={[styles.container]}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}> 
                <Text style={{fontSize: 30, fontWeight:700}}>Home</Text>
                <TouchableOpacity style={{marginRight: 30, alignSelf: 'flex-end'}} onPress={handleModal}>
                    <Ionicons name="person" size={35} color="black" />
                </TouchableOpacity>
                <ProfileModal isVisible={isProfileVisible} handleModal={handleModal} icon={data.Person} />
            </View>
            <Search/>
            <Text style={styles.welcome}>Welcome, Henushan</Text>
            <View style={styles.capacity}>
                <ButtonCapacity name="Gym" percentage="32"/>
                <ButtonCapacity name="Climbing" percentage="58"/>
            </View>
            <Text style={styles.announcementTitle}> Announcements </Text>
            <View style={styles.announcement}>
                <ButtonAnnouncement number="8"/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    capacity: {
        margin: 30,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    announcementTitle: {
        fontSize: 30
    },
    announcement: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    welcome: {
        marginLeft: 20,
        marginTop: 5,
        fontWeight: '300',
        fontSize: 20
    }
})