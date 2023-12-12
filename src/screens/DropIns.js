import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Search from '../components/Search';
import { Dropdown } from 'react-native-element-dropdown';
import React, { useState } from 'react';
import data from '../../assets/Data';
import ServiceIcon from '../components/ServiceIcon';

//mock data
const dropIns =  {
    'Monday': ['Volleyball', 'Basketball', 'Badminton'],
    'Tuesday': ['Volleyball', 'Badminton', 'Squash'],
    'Wednesday': ['Volleyball', 'Badminton', 'Squash', 'Swimming'],
    'Thursday': ['Badminton', 'Squash'],
    'Friday': ['Squash', 'Swimming', 'Volleyball', 'Swimming','Pickleball'],
    'Saturday': ['Squash', 'Swimming', 'Volleyball', 'Badminton','Pickleball'],
    'Sunday': ['Squash', 'Swimming', 'Volleyball']
}

// mock data
const sportInfo = {
    Volleyball: ['Open from 11:00am to 7:00pm, Gymnasium 3', data.Volleyball],
    Badminton: ['Open from 10:00am to 7:00pm, Gynasium 3', data.Badminton],
    Basketball: ['Open from 8:00am to 3:00pm, Smith Gym', data.Basketball],
    Squash: ['Open from 9:00am to 5:00pm, Court 1-3', data.Squash],
    Swimming: ['Open from 6:00am to 11:am, Lane Swims', data.Swimming],
    Pickleball: ['Open from 12:00pm to 4:00pm, Court 4 & 5', data.PickleBall]
}

export default function DropIns() {
    const [value, setValue] = useState('Monday');
    const [isFocus, setIsFocus] = useState(false);

    const list = dropIns[value];

    const data = [
        { label: 'Monday', value: 'Monday' },
        { label: 'Tuesday', value: 'Tuesday' },
        { label: 'Wednesday', value: 'Wednesday' },
        { label: 'Thursday', value: 'Thursday' },
        { label: 'Friday', value: 'Friday' },
        { label: 'Saturday', value: 'Saturday' },
        { label: 'Sunday', value: 'Sunday' },
    ];

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Drop-Ins</Text>
            <Search />
            <View style={styles.dropcontainer}>
                <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                setValue(item.value);
                setIsFocus(false);
                }}
                />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', margin: 20}}>
            {list.map((sport) => {
                return(
                    <View key={sport} style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
                    <TouchableOpacity style={{justifyContent: 'center', margin: 10, borderBottomWidth:1}}>
                        <Text style={{fontSize: 20, fontWeight: 500}}>{sport}</Text>
                    </TouchableOpacity>
                    <ServiceIcon 
                        uri={sportInfo[sport][1]}
                    />
                    <Text style={{margin: 5}}>{sportInfo[sport][0]}</Text>
                    </View>
                )
            })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white'
    },
    dropcontainer: {
        backgroundColor: 'white',
        width: 120,
        alignSelf: 'flex-end',
        marginTop: 20
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
      marginVertical: 10
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
})