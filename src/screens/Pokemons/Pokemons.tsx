import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {api, PokemonItem} from "../../api/api";
import {PADDING} from "../../constants/constants";



export const Pokemons = () => {
    const [pokemons,setPokemons] = useState<PokemonItem[]>([])
    useEffect(()=>{
        api.getAllPokemon().then((res)=>{
           setPokemons(res.data.results)
        })
    },[])
    return (
        //style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
         <View style={styles.container} >
            <FlatList

                data={pokemons}
                numColumns={2}
                contentContainerStyle={{paddingHorizontal:PADDING }}
                columnWrapperStyle={{justifyContent:'space-around'}}
                renderItem={({item})=>{
                    return <TouchableOpacity style={styles.box}>
                        <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                }}
                keyExtractor={(item,index)=> `${item.name}.${index}`}
            />
            {/*<Text>{JSON.stringify(pokemons,null,2)}</Text>*/}
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        alignItems:'center',
        backgroundColor: '#86dca8',
        paddingVertical:10,
        paddingHorizontal:10,
        marginVertical:5,
        width:'40%',
        borderRadius:5,
        borderWidth:1,
    },
    text:{
        fontSize:18,
        fontWeight:'500',
        color:'#1f3d2b',
    },
    container:{
        backgroundColor: '#cbe5f1',
    }
});