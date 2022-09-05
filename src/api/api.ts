import axios from "axios";
import {CurrentPokemon} from "../screens/CurrentPokemon/CurrentPokemon";

const BASE_URL = "https://pokeapi.co/api/v2/"

const instance = axios.create({
    baseURL:BASE_URL
})

export type PokemonItem = {
    name:string
    url:string
}
 export type PokemonT ={
    id:number
     name:string
     sprites:{
        other:{
            'official-artwork':{
                'front-default':string
            }
        }
     }
 }

export const api = {
    getAllPokemon(){
        return instance.get<{results:PokemonItem[]}>('/pokemon')
    },
    getCurrentPokemon(str:string){
        return instance.get<PokemonT>(str.replace(BASE_URL,))
    }

}