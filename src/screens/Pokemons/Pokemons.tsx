import React, {useEffect} from 'react';
import {FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {PADDING} from "../../constants/constants";
import {useAppNavigation} from "../types";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {getAllPokemonTC} from "../../store/root";

const image = { uri: "https://slovnet.ru/wp-content/uploads/2018/08/23-36.jpg" };

export const Pokemons = () => {

    const navigation = useAppNavigation()
    const dispatch = useAppDispatch()
const pokemons = useAppSelector(state => state.root.allPokemon)

    useEffect(() => {

        // @ts-ignore
        dispatch(getAllPokemonTC())
    }, [])

    return (

        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image} >
                <FlatList
                    data={pokemons}
                    numColumns={2}
                    contentContainerStyle={{paddingHorizontal: PADDING}}
                    columnWrapperStyle={{justifyContent: 'space-around'}}
                    renderItem={({item}) => {
                        return <TouchableOpacity
                            onPress={()=>{
                                navigation.navigate('CurrentPokemon',{url:item.url})
                            }}
                            style={styles.box}>
                            <Text style={styles.text}>{item.name}</Text>
                        </TouchableOpacity>
                    }}
                    keyExtractor={(item, index) => `${item.name}.${index}`}
                />
            </ImageBackground>

        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        alignItems: 'center',
        backgroundColor: '#99c9ad',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 5,
        width: '40%',
        borderRadius: 5,
        borderWidth: 1,
        opacity:0.9,
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
        color: '#100f0f',
    },
    container: {
        flex: 1,
    },
    image:{
        height:"100%"
    }
});