import React, { useState, useEffect } from 'react'

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'


export interface PokemonBoxProps {
    pokemonSpecie: {
        name:string,
    }
    handleSelectPokemon: Function,
}

const PokemonBox: React.FC<PokemonBoxProps> = ({ pokemonSpecie, handleSelectPokemon }) => {
    return (
        <TouchableOpacity onPress={() => handleSelectPokemon(pokemonSpecie)}>
            <View style={styles.outlineContainer}>
                <View style={styles.container}>
                    <Text style={styles.pokemonText }>{ pokemonSpecie.name }</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:10,
        margin:4,
        backgroundColor:'white',
        borderRadius:10,
    },
    pokemonText: {
        fontSize:22,
        color:'black',
    },
    outlineContainer: {
        backgroundColor:'black',
        margin:10,
        borderRadius:10,
    }
})

export default PokemonBox