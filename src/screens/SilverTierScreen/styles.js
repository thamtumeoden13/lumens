import { StyleSheet } from 'react-native';
import { calcHeight, scale, verticalScale } from '@/utils/scaleSize';
import colors from '@/constants/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop:48,
        backgroundColor: colors.red,
        borderTopLeftRadius: scale(36),
        borderTopRightRadius: scale(36)
    },
    cirle: {
        width: 500,
        height: 500,
        borderRadius: 500 / 2,
        backgroundColor: '#fff',
        left: -120,
        top: -50,
        position: 'absolute'
    },
    header: {
        fontWeight: '800',
        fontSize: 30,
        color: '#514e5a',
        marginTop: 32
    },
    input: {
        height: 48,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#bab7c3',
        borderRadius: 32,
        paddingHorizontal: 16,
        color: '#514e5a',
        fontWeight: '600'
    },
    continue: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        backgroundColor: '#9075e3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputTitle: {
        width: '100%',
        height: verticalScale(48),
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#f0f0f0',
        marginBottom: 15,
        paddingHorizontal: 10,
        backgroundColor:colors.light
    },
    inputContent: {
        width: '100%',
        minHeight: verticalScale(96),
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#f0f0f0',
        marginBottom: 15,
        paddingHorizontal: 10,
        backgroundColor:colors.light
    },
})