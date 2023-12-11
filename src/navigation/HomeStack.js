import Home from '../screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Capacity from '../screens/Capacity';
import Announcement from '../screens/Announcements';

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen(){
    return (
        <HomeStack.Navigator screenOptions={{headerShown: false}}>
            <HomeStack.Screen name="Home_Screen" component={Home} />
            <HomeStack.Screen name="Capacity_Screen" component={Capacity} />
            <HomeStack.Screen name="Announcement_Screen" component={Announcement} />
        </HomeStack.Navigator>
    )
}