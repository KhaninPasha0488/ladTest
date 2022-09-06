import {NavigationProp, useNavigation} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamsList = {
    Pokemons: undefined,
    CurrentPokemon: {
        url: string
    }
}

export type CurrentPokemonProps = NativeStackScreenProps<RootStackParamsList, 'CurrentPokemon'>
export type UseNavigationType = NavigationProp<RootStackParamsList>
export const useAppNavigation = () => useNavigation<UseNavigationType>()