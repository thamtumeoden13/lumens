
import React, { useEffect } from 'react';
import { View, ScrollView, } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import Header from '@/components/Common/Header';

import { SilverTierBody, SilverTierHeader, SilverTierOtherRelation } from '@/components/UI/SilverTier';

import colors from '@/constants/colors';

const SilverTierScreen = (props) => {

    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            header: () => <Header
                title=''
                isShowBackIcon
            // isShowRightIcon
            // onPressRightIcon={showAddNewDiary}
            />,
        })
    }, [])

    return (
        <ScrollView bounces={false} contentContainerStyle={{ backgroundColor: colors.grey01, alignItems: 'center' }}>

            <SilverTierHeader />
            <SilverTierBody />
            <View style={{
                height: 220, width: '100%', backgroundColor: colors.white
            }} />
            <SilverTierOtherRelation />
        </ScrollView >
    )
}

export default SilverTierScreen
