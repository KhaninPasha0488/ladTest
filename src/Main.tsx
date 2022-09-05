import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";
 export type RootStackParamsList ={
    Home:undefined,
    Details:undefined,
    User:undefined,
}
type UseNavigationType = NavigationProp<RootStackParamsList>
export const useAppNavigation = ()=> useNavigation<UseNavigationType>()

function HomeScreen() {
    const  navi =useAppNavigation()
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title={"Go details"} onPress={()=>{
                navi.navigate("Details")
            }}/>
        </View>
    );
}
function DitailsScreen() {
    const  navi =useAppNavigation()
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Ditails Screen</Text>
            <Button title={"Go home"} onPress={()=>{
                navi.navigate("Home")
            }}/>
        </View>
    );
}

function UserScreen() {
    const  navi =useAppNavigation()
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Ditails Screen</Text>
            <Button title={"Go user"} onPress={()=>{
                navi.navigate("User")
            }}/>
        </View>
    );
}
// const Stack = createNativeStackNavigator<RootStackParamsList>();
//const Stack = createBottomTabNavigator();//Tab
const Stack = createDrawerNavigator(); //Drawer
export const Main = () => {
    return (
        <View style={styles.container}>
            <Stack.Navigator>
                <Stack.Screen name={"Home"} component={HomeScreen} />
                <Stack.Screen name={"Details"} component={DitailsScreen} />
                <Stack.Screen name={"User"} component={UserScreen} />
            </Stack.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});