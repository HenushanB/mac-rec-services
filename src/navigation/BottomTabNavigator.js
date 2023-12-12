import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image, View, Dimensions} from 'react-native';
import HomeStackScreen from './HomeStack';
import ServicesStackScreen from './ServicesStack';
import DropInsStackScreen from './DropInsStack';
import data from '../../assets/Data';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: true,
            headerShown: false,
            tabBarStyle: {
                borderRadius: 10,
                height: 50,
            }
        }}    
    >
        <Tab.Screen 
            name="Home" 
            component={HomeStackScreen} 
            options={{
                tabBarIcon: () => {
                    return (
                        <Image
                            style={{width: 15, height: 15, borderRadius: 50}}
                            source={{
                                uri: data.circle
                            }}
                        />
                    )
                }
            }}
        />
        <Tab.Screen
            name="Services"
            component={ServicesStackScreen} 
            options={{
                tabBarIcon: () => {
                    return (
                        <Image
                            style={{width: 15, height: 15, borderRadius: 50}}
                            source={{
                                uri: data.circle
                            }}
                        />
                    )
                }
            }}
        />
        <Tab.Screen
            name="DropIns"
            component={DropInsStackScreen} 
            options={{
                tabBarIcon: () => {
                    return (
                        <Image
                            style={{width: 15, height: 15, borderRadius: 50}}
                            source={{
                                uri: data.circle
                            }}
                        />
                    )
                }
            }}
        />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;