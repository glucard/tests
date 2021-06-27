import { StackNavigationProp } from "@react-navigation/stack"
import React, { useState } from "react"
import { HomeNavigatorParamsList, IGenerations, IPokemon, IPokemonDefaults, IPokemonSpecie } from "../../types"
import { RouteProp } from "@react-navigation/core"
import { StyleSheet, View } from "react-native"
import PokemonBox from "./components/PokemonBox"
import pokemonApi from "../../services/PokemonApi"
import { ScrollView } from "react-native-gesture-handler"
import MiniSummary from "./components/MiniSummary"

export interface PokemonScreenProps {
    navigation: StackNavigationProp<HomeNavigatorParamsList, 'PokemonScreen'>
    route: RouteProp<{ params: {pokemonSpecies: Array<IPokemonSpecie>}}, 'params'>
}

const PokemonScreen: React.FC<PokemonScreenProps> = ({ navigation, route }) => {
    const pokemonSpecies = route.params.pokemonSpecies
    const [selectedPokemonState, setSelectedPokemonState] = useState<string>('none')
    const [selectedPokemon, setSelectedPokemon] = useState<IPokemon>(IPokemonDefaults)

    function handleSelectPokemon(pokemonSpecie: IPokemonSpecie){
        setSelectedPokemonState('loading')
        pokemonApi.getPokemon(pokemonSpecie.name).then(pokemon => {
            setSelectedPokemon(pokemon)
            setSelectedPokemonState('loaded')
        }).catch(e => {
            console.error(e)
        })
    }

    function handleUnselectPokemon(){
        setSelectedPokemonState('none')
    }

    function showMiniSummary(){
        switch(selectedPokemonState){
            case 'none':
                return null
                break
            default:
                return (
                    <View style={styles.miniSummary}>
                        <MiniSummary
                            pokemon={selectedPokemon}
                            pokemonState={selectedPokemonState}
                            handleUnselectPokemon={handleUnselectPokemon}
                        />
                    </View>
                )
        }
    }

    return (
        <View style={styles.container}>
            
            {
                showMiniSummary()
            }
            <View style={styles.pokemonList}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        pokemonSpecies.map(pokemonSpecie => (
                            <PokemonBox
                                key={pokemonSpecie.name}
                                pokemonSpecie={pokemonSpecie}
                                handleSelectPokemon={handleSelectPokemon}
                            />
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#ff4545",
        flexDirection:'column'
    },
    pokemonList:{
        alignItems:'center',
    },
    miniSummary:{
        alignItems:'center',
        margin:0,
        backgroundColor:'black'
    },

})

export default PokemonScreen