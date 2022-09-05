import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api, PokemonItem, PokemonT} from "../api/api";

const getAllPokemon = createAsyncThunk<PokemonItem[] | undefined,void>(
    "root/getAllPokemon",async (_,apiThunk)=>{
       try{
const res = await api.getAllPokemon()
         return res.data.results
       } catch (e){

       }
    })

const rootSlice = createSlice({
    name:'root',
    initialState:{
        allPokemon:[] as PokemonItem[],
        currentPokemon:{} as PokemonT
    },
    reducers:{},
    extraReducers:(builder)=>{
builder.addCase(getAllPokemon.fulfilled,(state,action) =>{
    state.allPokemon = action.payload ? action.payload :[]
})
    }
})
export const root = rootSlice.reducer