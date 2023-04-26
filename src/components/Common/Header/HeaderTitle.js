import React from 'react';
import { View, Text } from 'react-native'

import { scale } from '@/utils/scaleSize';

const HeaderTitle = ({ title = '' }) => {
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{
                fontSize: scale(16),
                textAlign: 'center',
            }}>{title}</Text>
        </View>
    )
};

export default HeaderTitle;