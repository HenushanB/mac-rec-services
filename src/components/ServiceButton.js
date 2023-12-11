import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ServiceButton = ({ icon, description, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        {icon}
        <Text style={styles.text}>{description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ECE6F0',
    marginTop: 15,
    paddingVertical: 15,
    borderRadius: 5,
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: 'center'
  },
  text: {
    fontWeight: "500",
    fontSize: 18,
  },
});

export default ServiceButton;