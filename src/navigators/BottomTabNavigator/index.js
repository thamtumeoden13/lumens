import React from 'react'
import { ImageBackground, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import * as SCREEN from '@/screens'
import { scale } from '@/utils/scaleSize'

const BottomTab = createBottomTabNavigator()

const IconBottomTab = ({ source, size, focused }) => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <LottieView
                source={require(`@/assets/icon/wallet.png`)}
                colorFilters={[{
                    keypath: "button",
                    color: "#F00000"
                }, {
                    keypath: "Sending Loader",
                    color: "#F00000"
                }]}
                style={{ width: scale(size), height: scale(size), justifyContent: 'center' }}
            // autoPlay={focused}
            // loop
            /> */}

            <ImageBackground
                style={{
                    width: size,
                    height: size,
                    justifyContent: 'center',
                    alignContent: 'center',
                }}
                resizeMode="contain"
                source={source}
            ></ImageBackground>
        </View>
    )
}

const HomeTabs = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                tabBarInactiveTintColor: '#6a6a6a',
                tabBarLabelPosition: 'beside-icon',
                headerShown: false,
                headerBackTitle: '',
                headerBackTitleVisible: false,
                headerBackVisible: false,
            }}
        >
            <BottomTab.Screen
                name="homescreen"
                component={SCREEN.HomeScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) => (
                        <IconBottomTab color={color} source={require(`@/assets/icon/home.png`)} size={scale(32)} focused={focused} />
                        // <Icons.Ionicons name={'medkit'} color={color} size={size} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="notificationscreen"
                component={SCREEN.NotificationScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) => (
                        <IconBottomTab source={require(`@/assets/icon/notifi.png`)} size={scale(32)} focused={focused} />
                    ),
                    tabBarBadge: '',
                    tabBarBadgeStyle: {
                        backgroundColor: '#fc5a5a',
                        color: 'rgba(155, 155, 155, 1)',
                        minWidth: scale(14),
                        maxHeight: scale(14),
                    },
                }}
            />
            <BottomTab.Screen
                name="walletscreen"
                component={SCREEN.WalletScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) => (
                        <IconBottomTab source={require(`@/assets/icon/wallet.png`)} size={scale(32)} focused={focused} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="profilescreen"
                component={SCREEN.ProfileScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size, focused }) => (
                        <IconBottomTab source={require(`@/assets/icon/user.png`)} size={scale(32)} focused={focused} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    )
}

export default HomeTabs
