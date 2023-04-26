
import React from 'react';
import { View, Image } from 'react-native'

import GradientText from '@/components/Common/Text/GradientText';

import { scale, verticalScale } from '@/utils/scaleSize';
import styles from './styles';

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{
                flex: 1, width: '100%',
                justifyContent: 'center', alignItems: 'center',
                // backgroundColor:'red'
            }}  >
                <Image
                    style={styles.image}
                    source={require('@/assets/image/bg-1.png')}
                />
                <View style={{ position: 'absolute', height: verticalScale(80), justifyContent: 'center', alignItems: 'center' }}>
                    <GradientText
                        colors={['#384CFF', '#00A3FF']}
                        style={{ fontSize: scale(28), fontWeight: 'bold', letterSpacing: scale(4) }}
                    >{`PROFILE`}</GradientText>
                </View>
            </View>
        </View>
    )
}

export default ProfileScreen