import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'

import { Icons } from '@/components/Common/Icon';
import { moderateScale, scale, verticalScale } from '@/utils/scaleSize';
import colors from '@/constants/colors';

const SilverTierBody = () => {

    return (

        <View
            style={{
                position: 'absolute',
                zIndex: 10,
                top: verticalScale(152),
                width: moderateScale(343),
                height: verticalScale(416),
                justifyContent: 'center',
                alignContent: 'center',
                backgroundColor: colors.white,
                borderRadius: scale(8),
                borderColor: '#fafafb',
                shadowColor: 'rgba(23, 23, 37, 0.04)',
                shadowOffset: { width: scale(12), height: scale(18) },
                shadowOpacity: 0.5,
                shadowRadius: 4,
            }}
        >
            <ImageBackground
                style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignContent: 'center',
                    position: 'relative',
                }}
                resizeMode="contain"
                source={require('@/assets/image/bg-1.png')}
            />
            <View style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', padding: scale(24) }}>
                <Text style={{
                    height: verticalScale(24),
                    fontWeight: '600',
                    fontSize: scale(14),
                    lineHeight: scale(24),
                    color: '#b5b5be'
                }}>{`Available Coin balance`}</Text>
                <Text style={{
                    width: moderateScale(96),
                    height: verticalScale(56),
                    fontWeight: '400',
                    fontSize: scale(48),
                    lineHeight: scale(56),
                    marginTop: verticalScale(8)
                }}>
                    {`340`}
                </Text>
                <View style={{
                    width: moderateScale(295),
                    height: verticalScale(8),
                    borderRadius: scale(4),
                    marginTop: verticalScale(32),
                    backgroundColor: colors.grey07
                }}>
                    <View style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        width: moderateScale(192),
                        height: verticalScale(8),
                        borderRadius: scale(4),
                        backgroundColor: colors.bluedark
                    }}>
                    </View>
                </View>
                <Text style={{
                    // width: moderateScale(145),
                    height: verticalScale(48),
                    fontWeight: '400',
                    fontSize: scale(16),
                    lineHeight: scale(24),
                    letterSpacing: 0.5,
                    color: colors.grey04,
                    marginTop: verticalScale(32),
                }}>{`You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.`}</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', height: verticalScale(24), marginTop: verticalScale(16) }}>
                    <Text style={{
                        color: colors.bluedark, fontWeight: '400',
                        fontSize: scale(16), lineHeight: verticalScale(24),
                    }}>
                        {`View tier benefits`}
                    </Text>
                    <Icons.Entypo name='chevron-right' size={scale(28)} color={colors.bluedark} />
                </View>
                <TouchableOpacity
                    style={{
                        width: '100%', height: verticalScale(60),
                        justifyContent: 'center', alignItems: 'center',
                        backgroundColor: colors.grey01,
                        borderRadius: scale(4),
                        marginTop: verticalScale(24)
                    }}
                >
                    <Text style={{
                        color: colors.white,
                        fontWeight: '600',
                        fontSize: scale(18),
                        lineHeight: scale(24),
                    }}>{`My Coupons`}</Text>
                </TouchableOpacity>
                <Text style={{
                    height: verticalScale(24),
                    fontWeight: '400',
                    fontSize: scale(14),
                    lineHeight: scale(20),
                    color: '#b5b5be',
                    marginTop: verticalScale(16),
                    textAlign: 'center'
                }}>{`Updated : 02/11/2021`}</Text>
            </View>
        </View>
    )
}

export default SilverTierBody