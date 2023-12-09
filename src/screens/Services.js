import {useState} from "react";
import {StyleSheet, Text, View, Button } from "react-native";
import ServiceIcon from "../components/Icons/ServiceIcon";
import ServiceButton from "../components/ServiceButton";
import ServiceModal from "../components/SerivceModal";
import data from '../../assets/Data'

const createIcon = (uri) => { 
    return (
        <ServiceIcon
            uri={uri}
        />
    );
}

export default function Services() {

    const servicesList = [
        ["Swimming", 'Swimming recreation offers', data.swimming],
        ["Sport Therapy", 'Offers sport therapy for specific injuries and rehabilitation for students of all ages!', data.therapy],
        ["Fitness Gym", "Open from 7am - 11pm, the McMaster Pulse Fitness Center Gymnasium", data.gym],
        ["Rock Climbing", "Open from 2pm - 11pm, Rocking climbing is available to all students and staff", data.climbing]
    ]

    const swimIcon = createIcon(data.swimming);
    const therapyIcon = createIcon(data.therapy);
    const gymIcon = createIcon(data.gym);
    const climbingIcon = createIcon(data.climbing);
   
    const [isModalVisibleSwimming, setIsModalVisibleSwimming] = useState(false);
    const handleModalSwimming = () => setIsModalVisibleSwimming(() => !isModalVisibleSwimming);
    const [isModalVisibleTherapy, setIsModalVisibleTherapy] = useState(false);
    const handleModalTherapy = () => setIsModalVisibleTherapy(() => !isModalVisibleTherapy);
    const [isModalVisibleGym, setIsModalVisibleGym] = useState(false);
    const handleModalGym = () => setIsModalVisibleGym(() => !isModalVisibleGym);
    const [isModalVisibleClimbing, setIsModalVisibleClimbing] = useState(false);
    const handleModalClimbing = () => setIsModalVisibleClimbing(() => !isModalVisibleClimbing);

    return (
    <View style={styles.container}>
        <Text style={styles.title}>DBAC Services</Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.services}>
                <View style={styles.button}>
                    <ServiceButton icon={swimIcon} description={servicesList[0][0]} onPress={handleModalSwimming} />
                    <ServiceModal isVisible={isModalVisibleSwimming} description={servicesList[0][1]} handleModal={handleModalSwimming} icon={swimIcon} />
                </View>
                <View style={styles.button}>
                    <ServiceButton icon={therapyIcon} description={servicesList[1][0]} onPress={handleModalTherapy} />
                    <ServiceModal isVisible={isModalVisibleTherapy} description={servicesList[1][1]} handleModal={handleModalTherapy} icon={therapyIcon} />
                </View>
            </View>
            <View style={styles.services}>
                <View style={styles.button}>
                    <ServiceButton icon={gymIcon} description={servicesList[2][0]} onPress={handleModalGym} />
                    <ServiceModal isVisible={isModalVisibleGym} description={servicesList[2][1]} handleModal={handleModalGym} icon={gymIcon} />
                </View>
                <View style={styles.button}>
                    <ServiceButton icon={climbingIcon} description={servicesList[3][0]} onPress={handleModalClimbing} />
                    <ServiceModal isVisible={isModalVisibleClimbing} description={servicesList[3][1]} handleModal={handleModalClimbing} icon={climbingIcon} />
                </View>
            </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  services: {
    flexDirection: 'row'
  },
  button: {
    margin: 20
  }
});