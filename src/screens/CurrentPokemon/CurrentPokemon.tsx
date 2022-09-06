import React, {useEffect} from 'react';
import {ActivityIndicator, Image, Text, View} from "react-native";
import {CurrentPokemonProps} from "../types";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {clearCurrentPokemonAC, getCurrentPokemonTC} from "../../store/root";

export const CurrentPokemon = ({route}: CurrentPokemonProps) => {
    const currentPokemon = useAppSelector(state => state.root.currentPokemon)
    const dispatch = useAppDispatch()
    useEffect(() => {
        // @ts-ignore
        dispatch(getCurrentPokemonTC(route.params.url))
        return () => {
            dispatch(clearCurrentPokemonAC())
        }
    }, [])
    if (!Object.keys(currentPokemon).length) {
        return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" />
        </View>
    }
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            {currentPokemon &&
                <>
                    <Text style={{fontSize: 30, fontWeight: '500',marginBottom:40,}}>{currentPokemon.name}</Text>
                    <Image source={{uri: currentPokemon.sprites.other["official-artwork"].front_default}}
                           style={{width: 200, height: 200}}
                    />
                </>}


        </View>
    );
};

