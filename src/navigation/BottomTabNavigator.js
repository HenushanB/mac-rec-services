import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import {Image} from 'react-native'
import data from '../../assets/Data';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: true,
            tabBarStyle: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#ECE6F0',
                borderRadius: 15,
                height: 90,
            }
        }}    
    >
        <Tab.Screen 
            name="Home" 
            component={Home} 
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
            component={Settings} 
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