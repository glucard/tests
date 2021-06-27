import React, { useState, useEffect } from 'react'

import { StyleSheet, View, Text, ImageBackground, Button, TouchableOpacity, ImageURISource } from 'react-native'
import { IPokemon } from '../../../types'

import PokemonType from '../../components/PokemonType'

export interface MiniSummaryProps {
    pokemon: IPokemon,
    pokemonState: string,
    handleUnselectPokemon: Function,
}


const MiniSummary: React.FC<MiniSummaryProps> = ({ pokemon, pokemonState, handleUnselectPokemon }) => {
    if(pokemonState == 'loading'){
        return (
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Text style={styles.pokemonText}>Loading...</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.imageContainer}>
                    <ImageBackground
                        style={styles.pokemonSprite}
                        source={{uri:pokemon.sprites.front_default}}
                    >
                        <TouchableOpacity style={styles.closeButton} onPress={() => handleUnselectPokemon()}>
                            <View>
                                <Text style={styles.closeButtonText}>x</Text>
                            </View>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <Text style={styles.pokemonText}>{ pokemon.name }</Text>
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.typesContainer}>
                    {
                        pokemon.types.map(type => (
                            <PokemonType
                                key={type.type.name}
                                pokemonType={type.type.name}
                            />
                        ))
                    }
                </View>
                <Text style={styles.pokemonText}>Weight: {pokemon.weight/10}kg</Text>
                <Text style={styles.pokemonText}>Height: {pokemon.height/10}m</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        margin:5,
    },
    leftContainer:{
        flex:1,
        padding:5,
        alignItems:'center',
        borderRadius:5,
    },
    rightContainer:{
        flex:1,
        alignItems:'center',
    },
    imageContainer: {
        padding:10,
        margin:5,
        backgroundColor:'lightgrey',
        borderRadius:10,
        alignItems:'center',
    },
    pokemonText: {
        fontSize:22,
        color:'white'
    },
    pokemonSprite:{
        width:150,
        height:150,
    },
    closeButton:{
        alignSelf:'flex-end'
    },
    closeButtonText:{
        fontSize:28
    },
    typesContainer:{
        flexDirection:'row',
    },
})

export default MiniSummary