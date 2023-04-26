import React from 'react';
import { View, SafeAreaView, } from 'react-native'

import HeaderTitle from './HeaderTitle';
import BackIcon from '../Icon/BackIcon';

import { moderateScale, verticalScale } from '@/utils/scaleSize';
import colors from '@/constants/colors';

const Header = ({
    isShowBackIcon = false,
    isShowRLeftIcon = false,
    isShowRightIcon = false,
    title = '',
    onPressLeftIcon, onPressRightIcon
}) => {
    return (
        <SafeAreaView
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: verticalScale(96),
                backgroundColor: colors.grey01
            }}>
            <View style={{
                width: moderateScale(48), height: verticalScale(48),
                justifyContent: 'center', alignItems: 'flex-start',
                marginLeft: 18
            }}>
                {!!isShowBackIcon ?
                    <BackIcon />
                    :
                    null
                }
            </View>
            {/* {!!isShowRLeftIcon &&
                <View style={{
                    width: moderateScale(48), height: verticalScale(48),
                    justifyContent: 'center', alignItems: 'flex-end'
                }}>
                    <ShoppingCartIcon onPress={onPressLeftIcon} />
                </View>
            } */}
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {!!title && <HeaderTitle title={title} />}
            </View>

            {/* <View style={{
                width: moderateScale(48), height: verticalScale(48),
                justifyContent: 'center', alignItems: 'flex-end'
            }}>
                {!!isShowRightIcon &&
                    <AddIcon onOpen={onPressRightIcon} />
                }
            </View> */}
        </SafeAreaView>
    )
}

export default Header