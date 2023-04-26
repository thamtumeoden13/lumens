import { StyleSheet } from 'react-native';
import colors from '@/constants/colors';
import { calcHeight, calcWidth, moderateScale, scale, verticalScale } from 'utils/scaleSize';

export default StyleSheet.create({
	container: {
		flex: 1,
		height: calcHeight(100),
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.white,
		borderTopLeftRadius: scale(36),
		borderTopRightRadius: scale(36),
	},
	title: {

	},
	logo: {
		// flex: 1,
		// height: 120,
		// width: 90,
		alignSelf: "center",
		margin: 30
	},
	input: {
		height: 48,
		borderRadius: 5,
		overflow: 'hidden',
		backgroundColor: 'white',
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 30,
		marginRight: 30,
		paddingLeft: 16
	},
	button: {
		flexDirection: 'row',
		alignItems: "center",
		justifyContent: 'center',
		height: verticalScale(48),
		width: calcWidth(90),
		backgroundColor: '#788eec',
		marginHorizontal: moderateScale(30),
		marginVertical: verticalScale(24),
		borderRadius: scale(12),
	},
	buttonTitle: {
		color: 'white',
		fontSize: 16,
		fontWeight: "bold"
	},
	footerView: {
		flexDirection: 'row',
		width: '100%', height: verticalScale(36), paddingHorizontal: moderateScale(16),
		justifyContent: 'space-between', alignItems: 'center'
	},
	footerText: {
		fontSize: 16,
		color: '#2e2e2d'
	},
	footerLink: {
		color: "#788eec",
		fontWeight: "bold",
		fontSize: 16
	},
	image: {
		width: moderateScale(274),
		height: verticalScale(225)
	}
})