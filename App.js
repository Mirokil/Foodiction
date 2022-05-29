import React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import {
    Collection,
    CollectionCheckout,
    CollectionTime,
    Maps,
    Menu,
    Order,
    OrderCheckout,
    OrderTable,
    Profile,
    QR_Code_Scanner,
    QR_Code,
    Venue
} from './screens'
import Tabs from './navigation/Tabs'

const Stack = createStackNavigator();

const App = () => {

    const [loaded] = useFonts({
        "MuseoSansRounded1000" : require('./assets/fonts/MuseoSansRounded1000.otf'),
        "MuseoSansRounded900" : require('./assets/fonts/MuseoSansRounded900.otf'),
        "MuseoSansRounded700" : require('./assets/fonts/MuseoSansRounded700.otf'),
        "MuseoSansRounded500" : require('./assets/fonts/MuseoSansRounded500.otf'),
        "MuseoSansRounded300" : require('./assets/fonts/MuseoSansRounded300.otf')
    })
    
    if(!loaded){
        return null;
    }
    
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName={'HomePage'}
                mode="modal"
            >
                <Stack.Screen
                    name="Home"
                    component={Tabs}
                />
                <Stack.Screen
                    name="Collection"
                    component={Collection}
                />
                <Stack.Screen
                    name="CollectionCheckout"
                    component={CollectionCheckout}
                />
                <Stack.Screen
                    name="CollectionTime"
                    component={CollectionTime}
                />
                <Stack.Screen
                    name="Maps"
                    component={Maps}
                />
                <Stack.Screen
                    name="Menu"
                    component={Menu}
                />
                <Stack.Screen
                    name="Order"
                    component={Order}
                />
                <Stack.Screen
                    name="OrderCheckout"
                    component={OrderCheckout}
                />
                <Stack.Screen
                    name="OrderTable"
                    component={OrderTable}
                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                />
                <Stack.Screen
                    name="QR_Code_Scanner"
                    component={QR_Code_Scanner}
                />
                <Stack.Screen
                    name="QR_Code"
                    component={QR_Code}
                />
                <Stack.Screen
                    name="Venue"
                    component={Venue}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;