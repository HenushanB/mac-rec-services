import Modal from "react-native-modal";
import {StyleSheet, View, Button, Text} from 'react-native'
import { TouchableOpacity } from "react-native";
import ServiceIcon from "./ServiceIcon";
import data from "../../assets/Data";

const ServiceModal = ({isVisible, description, handleModal, icon}) => {
    return(
        <Modal isVisible={isVisible}>
            <View style={styles.modal}>
                <View style={{alignItems: 'center', marginTop: 75}}>
                    {icon}
                    <Text style={styles.text}>{description}</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <ServiceIcon uri={data.calendar}/>
                    <Text>Book Now!</Text>
                </TouchableOpacity>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <View>
                        <Button title="Hide" onPress={handleModal}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 50,
        marginVertical: 200,
        borderRadius: 25
    },
    text: {
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#ECE6F0',
        marginTop: 40,
        paddingVertical: 15,
        borderRadius: 25,
        width: "50%",
        alignItems: "center",
        justifyContent: 'center',
    }
})

export default ServiceModal;
