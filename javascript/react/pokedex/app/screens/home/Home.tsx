import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet } from 'react-native'

import { StackNavigationProp } from "@react-navigation/stack"
import { HomeNavigatorParamsList, IGenerations } from "../../types" // interface fica no types?

import pokemonApi from "../../services/PokemonApi"
import GenerationBox from "./components/GenerationBox"
import { ScrollView } from "react-native-gesture-handler"

export interface HomeProps {
    navigation: StackNavigationProp<HomeNavigatorParamsList, 'Home'>
}

const Home: React.FC<HomeProps> = ({ navigation }) => {


    const [generations, setGenerations] = useState<Array<IGenerations>>([])
    const [isLoading, setIsloading] = useState(true)

    function handlePokemonScreen(generation: IGenerations){
        setIsloading(true)    
        pokemonApi.getGeneration(generation.name).then(pokemonsSpecies => {
            navigation.navigate('PokemonScreen', {pokemonSpecies: pokemonsSpecies, titleName:generation.name.toUpperCase()})
            setIsloading(false)
        }).catch(e => {
            console.error(e)
        })
    }

    useEffect(() => {
        pokemonApi.getGeneration().then(resGenerations => {
            setGenerations(resGenerations)
            setIsloading(false)
        }).catch(e => {
            console.error(e)
        })
    }, [])

    return isLoading ? (
        <View style={styles.container}>
            <Text style={styles.loadingText}>Loading...</Text>
        </View>
    ) : (
        <View style={styles.container}>
            <View style={styles.generationListContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
            {
                generations.map(generation => (
                    <GenerationBox
                        key={generation.name}
                        generation={generation}
                        handlePokemonScreen={handlePokemonScreen}
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
        alignItems:'center',
        backgroundColor:'#ff4545',
        height:'100%'
    },
    generationListContainer: {
        alignItems:'center',
    },
    loadingText: {
        position:'absolute',
        top:'50%',
        fontSize:22,
        color:'white'
    },
})

export default Home