import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeNavigatorParamsList } from '../types'
import { Home, PokemonScreen } from '../screens'

const HomeStack = createStackNavigator<HomeNavigatorParamsList>()

const HomeNavigator: React.FC = () => {
    const { Navigator, Screen } = HomeStack

    return (
        <Navigator initialRouteName='Home'>
            <Screen name='Home' component={Home}/>
            <Screen name='PokemonScreen' component={PokemonScreen}
            options={({ route }) => ({ title: route.params.titleName })}/>
        </Navigator>
    )
}

export default HomeNavigator