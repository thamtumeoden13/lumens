import { View, Text, } from 'react-native'

import { moderateScale, scale, verticalScale } from '@/utils/scaleSize';
import colors from '@/constants/colors';

const SilverTierHeader = () => {

    return (
        <View
            style={{
                height: verticalScale(300),
                backgroundColor: 'transparent',
                paddingHorizontal: moderateScale(24),
                marginTop: verticalScale(18),
            }}
        >
            <Text style={{
                height: verticalScale(40),
                fontSize: scale(32),
                color: colors.white,
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: scale(40)
            }}>
                {`Silver Tier`}
            </Text>
            <Text style={{
                height: verticalScale(48),
                fontSize: scale(16),
                color: colors.grey05,
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: scale(24),
                marginTop: verticalScale(8)
            }}>
                {`In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.`}
            </Text>
        </View>
    )
}

export default SilverTierHeader