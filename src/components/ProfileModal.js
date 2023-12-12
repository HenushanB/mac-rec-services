import Modal from 'react-native-modal'
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

const ProfileModal = ({isVisible, handleModal, icon}) => {
    return (
        <Modal isVisible={isVisible}>
            <View style={styles.modal}>
                <View style={styles.header}>
                    <Text style={styles.title}>Account</Text>
                    <TouchableOpacity style={{alignSelf: 'flex-end'}} onPress={handleModal}>
                        <AntDesign name="close" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                <Image
                    style={{width: 100, height: 100, borderRadius: 70}}
                    source={{
                        uri: icon
                    }}
                />
                <Text style={styles.text}>Henushan</Text>
                <TouchableOpacity style={styles.button}>
                    <Text>
                    Edit
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>
                    Settings
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal: 50,
        marginVertical: 200,
        borderRadius: 25
    },
    title: {
        fontSize: 20
    },
    header: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        margin: 20
    },
    text: {
        margin: 30,
        fontWeight: 300,
        fontSize: 20
    },
    body: {
        alignItems: 'center',
        margin: 15
    },
    button: {
        borderWidth: 1,
        padding: 15,
        borderColor: 'black',
        backgroundColor: '#ECE6F0',
        borderRadius: 30,
        marginVertical: 10,
        width: 100,
        alignItems: 'center'
    }
})

export default ProfileModal;