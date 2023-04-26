import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native'
import { withNavigation } from '@react-navigation/compat'
import { useNavigation } from '@react-navigation/native';

import LottieView from 'lottie-react-native';
import { moderateScale, scale, verticalScale } from 'utils/scaleSize';
import colors from '@/constants/colors';
import { Icons } from '.';

const BackIcon = () => {
    const navigation = useNavigation()

    const openDrawer = () => {
        if (navigation.canGoBack()) {
            navigation.goBack()
        }
    }

    return (
        <View style={{
            justifyContent: 'center', alignItems: 'center', width: scale(36), height: scale(36),
            borderRadius: 18, backgroundColor: colors.white
        }}>
            <TouchableOpacity onPress={openDrawer} >
                <Icons.AntDesign name='left' size={scale(20)} />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={openDrawer} >
                <ImageBackground
                    style={{
                        width: 32,
                        height: 32,
                        justifyContent: 'center',
                        alignContent: 'center',
                    }}
                    resizeMode="contain"
                    source={require('@/assets/icon/chevron-left.png')}
                ></ImageBackground>
            </TouchableOpacity> */}
            {/* <TouchableOpacity
                onPress={openDrawer}
                activeScale={0.8}
            >
                <LottieView
                    source={require('@assets/lotties/back-arrow.json')}
                    colorFilters={[{
                        keypath: "button",
                        color: "#F00000"
                    }, {
                        keypath: "Sending Loader",
                        color: "#F00000"
                    }]}
                    style={{ width: scale(24), height: scale(24), justifyContent: 'center', }}
                    autoPlay
                    loop
                />
            </TouchableOpacity> */}
        </View>
    )
};

export default withNavigation(BackIcon);