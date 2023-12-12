import { View, StyleSheet, TouchableOpacity, Text, Image} from "react-native"
import data from "../../assets/Data"

const categoryIcon = (category) => {
    let color;
    switch (category) {
        case "Services":
            color = 'yellow';
        case "DropIns":
            color = 'blue';
    }
    return(
        <View style={{backgroundColor: color, width: 15}}></View>
    )
}

const AnnouncementCard = ({category, title, desc}) => {

    const leftBanner = categoryIcon(category);
    return(
        <View style={styles.container}>
            {leftBanner}
            <TouchableOpacity style={styles.desc}>
                <View style={{marginHorizontal: 10, marginVertical: 10,}}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={{fontSize: 15}}>{desc}</Text>
                </View>
            </TouchableOpacity>
            <View style={{direction:'rtl', flex: 1, justifyContent: 'center', marginLeft: 10}}>
                <TouchableOpacity>
                    <Image
                        style={{width: 25, height: 25}}
                        source={{
                            uri: data.tripledot
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    desc: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AnnouncementCard;