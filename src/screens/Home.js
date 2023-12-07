import { StyleSheet, View, ScrollView, Text} from 'react-native';
import Search from '../components/Search';
import ButtonCapacity from '../components/ButtonCapacity';
import ButtonAnnouncement from '../components/ButtonAnnouncement';

export default function Home() {
    
    return (
        <ScrollView>
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