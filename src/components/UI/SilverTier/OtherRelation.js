import { View, Text, FlatList, Image } from 'react-native'

import { moderateScale, scale, verticalScale } from '@/utils/scaleSize';
import colors from '@/constants/colors';
import { DATA, DATA2, DATA3 } from '@/constants/data';
import styles from './styles';

const renderItem = ({ item, index }) => {

    return (
        <View style={styles.itemContainer}>
            <Image
                style={[{ height: verticalScale(98), width: '100%' }]}
                source={item.image}
                resizeMode='cover'
            />
            <Text style={[styles.itemTitle, { color: item.action ? '#696974' : colors.bluedark, }]}>{item.title}</Text>
            <Text style={styles.itemDescription} numberOfLines={item.action ? 2 : 3}>{item.description}</Text>
            {item.action &&
                <Text style={styles.itemAction}>{item.action}</Text>
            }
        </View>
    )
}

const SilverTierOtherRelation = () => {

    return (
        <View style={styles.outerContainer}>
            <View style={styles.container}>
                <Text style={styles.titleStyle}>
                    {`Petrol`}
                </Text>
                <FlatList
                    data={DATA}
                    keyExtractor={(item, index) => `Petrol-${index.toString()}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ flexGrow: 1 }}
                    style={{ marginTop: verticalScale(24) }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.titleStyle}>
                    {`Rental Rebate`}
                </Text>
                <FlatList
                    data={DATA2}
                    keyExtractor={(item, index) => `Rental-${index.toString()}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ flexGrow: 1 }}
                    style={{ marginTop: verticalScale(24) }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.titleStyle}>
                    {`Food and Beverage`}
                </Text>
                <FlatList
                    data={DATA3}
                    keyExtractor={(item, index) => `Food-${index.toString()}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ flexGrow: 1 }}
                    style={{ marginTop: verticalScale(24) }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default SilverTierOtherRelation
