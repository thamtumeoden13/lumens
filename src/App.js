import 'react-native-gesture-handler';

import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import AppContainer from './navigators'

const App = () => {
    return (
        <SafeAreaProvider>
            <AppContainer />
        </SafeAreaProvider>
    )
}

export default App