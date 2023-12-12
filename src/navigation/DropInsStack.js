import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DropIns from '../screens/DropIns';

const ServicesStack = createNativeStackNavigator();

export default function DropInsStackScreen(){
    return (
        <ServicesStack.Navigator screenOptions={{headerShown: false}}>
            <ServicesStack.Screen name="DropIns_Screen" component={DropIns} />
        </ServicesStack.Navigator>
    )
}