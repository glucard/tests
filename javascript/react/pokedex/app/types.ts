import { NavigationProp } from "@react-navigation/native"
import { ImageURISource } from "react-native"

export type HomeNavigatorParamsList = {
    Home: undefined,
    PokemonScreen: {
        pokemonSpecies: Array<IPokemonSpecie>,
        titleName: string,
    }
}

export interface IGenerations {
    name: string
}

export interface IPokemonSpecie {
    name: string
}

export interface IPokemon {
    name: string,
    sprites: {
        front_default: string
    },
    weight: number,
    height: number,
    types:Array<{
        type:{
            name:string
        }
    }>
}
export const IPokemonDefaults = {
    name:'none',
    sprites: {
        front_default: 'none'
    },
    weight: 0,
    height: 0,
    types:[{
        type:{
            name:'none'
        }
    }]
}