
import React from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { moderateScale, scale, verticalScale } from '@/utils/scaleSize';
import colors from '@/constants/colors';

import styles from './styles';
import GradientText from '@/components/Common/Text/GradientText';
import LinearGradient from 'react-native-linear-gradient';
import { Icons } from '@/components/Common/Icon';

const HomeScreen = (props) => {
    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate('silvertier')
    }

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
                    >{`LUMENTS MANAGER`}</GradientText>
                    <Text style={{ fontSize: scale(18), fontWeight: '300' }}>{`Manage everything`}</Text>
                </View>
                <TouchableOpacity
                    onPress={handlePress}
                >
                    <LinearGradient
                        colors={['#00A3FF', '#384CFF']}
                        start={{ x: 1, y: 1 }}
                        end={{ x: 0, y: 0.5 }}
                        locations={[0, 0.5]}
                        style={styles.button}
                    >
                        <Text style={styles.buttonTitle}>{`Silver Tier`}</Text>
                        <Icons.FontAwesome name='hand-o-right' size={scale(18)} color={colors.white} style={{ marginHorizontal: moderateScale(8) }} />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen