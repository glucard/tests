import React, { useState, useEffect } from 'react'

import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'


export interface PokemonTypeProps {
    pokemonType: string
}

const PokemonType: React.FC<PokemonTypeProps> = ({ pokemonType }) => {
    
    const types: { [key: string]: any } = {
        'normal':'#A8A77A',
        'fighting':'#C22E28',
        'flying':'#A98FF3',
        'ground':'#E2BF65',
        'rock':'#B6A136',
        'bug':'#A6B91A',
        'ghost':'#735797',
        'steel':'#B7B7CE',
        'fire':'#EE8130',
        'water':'#6390F0',
        'grass':'#7AC74C',
        'electric':'#F7D02C',
        'psychic':'#F95587',
        'ice':'#96D9D6',
        'dragon':'#6F35FC',
        'dark':'#705746',
        'fairy':'#D685AD',
        'unknown':'white',
        'shadow':'white',
    }

    const styles = StyleSheet.create({
        container: {
            width:80,
            margin:5,
            padding:2,
            backgroundColor:types[pokemonType],
            borderRadius:10,
            alignItems:'center',
        },
        typeText: {
            color:'white',
            fontSize:18
        },
    })
    
    return (

        <View style={styles.container}>
            <Text style={styles.typeText }>{ pokemonType }</Text>
        </View>
    )
}

export default PokemonType