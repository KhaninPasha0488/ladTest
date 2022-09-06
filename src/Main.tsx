import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Pokemons} from "./screens/Pokemons/Pokemons";
import {RootStackParamsList} from "./screens/types";
import {CurrentPokemon} from "./screens/CurrentPokemon/CurrentPokemon";

const Stack = createNativeStackNavigator<RootStackParamsList>();

export const Main = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Pokemons"} component={Pokemons}/>
            <Stack.Screen name={"CurrentPokemon"} component={CurrentPokemon}/>
        </Stack.Navigator>

    );
};

