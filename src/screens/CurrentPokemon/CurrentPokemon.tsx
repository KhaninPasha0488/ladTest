import React, {useEffect} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from "react-native";
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
        return <View style={styles.loading}>
            <ActivityIndicator size="large" />
        </View>
    }
    return (
        <View style={styles.container}>
            {currentPokemon &&
                <>
                    <Text style={styles.textId}>#{currentPokemon.id}</Text>
                    <Text style={styles.textName}>{currentPokemon.name}</Text>
                    <Image source={{uri: currentPokemon.sprites.other["official-artwork"].front_default}}
                           style={styles.imege}
                    />
                </>}
        </View>
    );
};

const styles = StyleSheet.create({
    loading:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textId:{
        fontSize: 20,
        fontWeight: '500',
        marginBottom:10,
    },
    textName:{
        fontSize: 30,
        fontWeight: '500',
        marginBottom:40,
    },
    imege:{
        width: 200,
        height: 200
    }
})