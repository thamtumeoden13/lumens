import { StyleSheet } from 'react-native';
import colors from '@/constants/colors';
import { calcHeight, calcWidth, moderateScale, scale, verticalScale } from 'utils/scaleSize';

export default StyleSheet.create({
	outerContainer: { width: '100%', backgroundColor: colors.white },
	container: {
		height: verticalScale(310), width: '100%', backgroundColor: colors.white,
		paddingHorizontal: moderateScale(24), marginTop: verticalScale(36)
	},
	titleStyle: {
		height: verticalScale(24), fontWeight: '600',
		fontSize: scale(18), lineHeight: verticalScale(24),
		color: colors.grey01
	},
	itemContainer: {
		width: moderateScale(200), height: verticalScale(240),
		marginRight: moderateScale(24),
		backgroundColor: colors.white,
		borderRadius: scale(8),
		shadowColor: 'rgba(23, 23, 37, 0.2)',
		shadowOffset: { width: scale(4), height: scale(18) },
		shadowOpacity: 0.2,
		shadowRadius: 8,
	},
	itemTitle: {
		height: verticalScale(24), fontWeight: '600', color: colors.bluedark,
		fontSize: scale(16), lineHeight: verticalScale(24),
		marginTop: verticalScale(16), paddingHorizontal: moderateScale(16)
	},
	itemDescription: {
		maxHeight: verticalScale(72), fontWeight: '400', color: colors.grey04,
		fontSize: scale(16), lineHeight: verticalScale(24),
		marginTop: verticalScale(8), paddingHorizontal: moderateScale(16),
	},
	itemAction: {
		height: verticalScale(20), fontWeight: '400', color: colors.bluedark,
		fontSize: scale(14), lineHeight: verticalScale(20),
		marginTop: verticalScale(8),
		paddingHorizontal: moderateScale(16)
	}
})