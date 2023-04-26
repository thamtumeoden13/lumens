
import React from 'react';
import { View, Image, } from 'react-native'

import { scale, verticalScale } from '@/utils/scaleSize';

import styles from './styles';
import GradientText from '@/components/Common/Text/GradientText';

const WalletScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{
                flex: 1, width: '100%',
                justifyContent: 'center', alignItems: 'center',
            }}  >
                <Image
                    style={styles.image}
                    source={require('@/assets/image/bg-1.png')}
                />
                <View style={{ position: 'absolute', height: verticalScale(80), justifyContent: 'center', alignItems: 'center' }}>
                    <GradientText
                        colors={['#384CFF', '#00A3FF']}
                        style={{ fontSize: scale(28), fontWeight: 'bold', letterSpacing: scale(4) }}
                    >{`WALLET`}</GradientText>
                </View>
            </View>
        </View>
    )
}

export default WalletScreen