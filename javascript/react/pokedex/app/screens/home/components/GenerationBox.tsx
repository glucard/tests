import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export interface GenerationBoxProps {
    generation: {
        name: string
    }
    handlePokemonScreen: Function
}

const GenerationBox: React.FC<GenerationBoxProps> = ({ generation, handlePokemonScreen }) => {
    return (
        <TouchableOpacity onPress={() => handlePokemonScreen(generation)}>
            <View style={styles.outlineContainer}>
                <View style={styles.container}>
                    <Text style={styles.generationText }>{ generation.name.toUpperCase() }</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    outlineContainer: {
        backgroundColor:'black',
        margin:10,
        borderRadius:10,
    },
    container: {
        alignItems:'center',
        width: 200,
        padding:10,
        margin:5,
        backgroundColor:'white',//'#f5f5dc',
        borderRadius:10,
    },
    generationText: {
        fontSize:22,
    }
})


export default GenerationBox