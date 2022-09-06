import {createAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api, PokemonItem, PokemonT} from "../api/api";

export const getAllPokemonTC = createAsyncThunk<PokemonItem[] | undefined,void>(
    "root/getAllPokemon",async (_)=>{
       try{
const res = await api.getAllPokemon()
         return res.data.results
       } catch (e){

       }
    })
export const getCurrentPokemonTC = createAsyncThunk<PokemonT | undefined,string>(
    'root/getCurrentPokemon',async (params)=>{
        try{
            const res = await api.getCurrentPokemon(params)
            return res.data
        } catch (e){

        }
})
export const clearCurrentPokemonAC = createAction('root/clearCurrentPokemonAC')
const rootSlice = createSlice({
    name:'root',
    initialState:{
        allPokemon:[] as PokemonItem[],
        currentPokemon:{} as PokemonT
    },
    reducers:{},
    extraReducers:(builder)=>{
builder
    .addCase(getAllPokemonTC.fulfilled,(state,action) =>{
    state.allPokemon = action.payload ? action.payload :[] as PokemonItem[]
})
    .addCase(getCurrentPokemonTC.fulfilled,(state,action)=>{
        state.currentPokemon = action.payload ? action.payload: {} as PokemonT
    })
    .addCase(clearCurrentPokemonAC, (state)=>{
        state.currentPokemon = {} as PokemonT
    })
    }
})
export const root = rootSlice.reducer