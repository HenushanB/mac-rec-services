import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Services from '../screens/Services'

const ServicesStack = createNativeStackNavigator();

export default function ServicesStackScreen(){
    return (
        <ServicesStack.Navigator screenOptions={{headerShown: false}}>
            <ServicesStack.Screen name="Services_Screen" component={Services} />
        </ServicesStack.Navigator>
    )
}