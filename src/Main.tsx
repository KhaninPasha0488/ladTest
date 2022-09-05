import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Pokemons} from "./screens/Pokemons/Pokemons";
import {RootStackParamsList} from "./screens/types";

 const Stack = createNativeStackNavigator<RootStackParamsList>();

export const Main = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen name={"Pokemons"} component={Pokemons} />
            </Stack.Navigator>

    );
};

