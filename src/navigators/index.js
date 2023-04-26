import React, { useEffect, useState } from 'react'
import { StatusBar, Alert, Linking, Platform, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeTabs from './BottomTabNavigator'

import * as SCREEN from '@/screens'

const Stack = createNativeStackNavigator()

const NavigationApp = (props) => {
    const navigationRef = useNavigationContainerRef()

    const onReady = () => {
        console.log('[onReady]')
        // SplashScreen.hide()
    }

    return (
        <SafeAreaProvider>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
            >
                <NavigationContainer ref={navigationRef} onReady={onReady}>
                    <Stack.Navigator initialRouteName='hometabs' screenOptions={{
                        headerShown: false,
                        headerBackTitle: '',
                        headerBackTitleVisible: false,
                        headerBackVisible: false,
                    }}>
                        <Stack.Screen name="hometabs" component={HomeTabs} options={{ headerShown: false }} />
                        <Stack.Screen name="silvertier" component={SCREEN.SilverTierScreen}
                            options={{
                                title: '',
                                headerShown: true,
                            }}
                         />
                    </Stack.Navigator>
                </NavigationContainer>
            </KeyboardAvoidingView>
        </SafeAreaProvider>
    )
}

export default NavigationApp
