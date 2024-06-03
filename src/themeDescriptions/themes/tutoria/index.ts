import {
	LocalTutoriaColorsDescriptionStruct,
	ThemeTutoriaDescription,
} from '@/interfaces/themes/tutoria';
import { lightTheme } from '@/themeDescriptions/base/vk';

const tutoriaFontFamilyFallbacks = '-apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif';
const tutoriaFontFamilyVK = `"VK Sans Display", ${tutoriaFontFamilyFallbacks}`;
const tutoriaFontFamilyRoboto = `Roboto, ${tutoriaFontFamilyFallbacks}`;

export const tutoriaThemeColors: LocalTutoriaColorsDescriptionStruct = {
	tutoriaColorAccent: { normal: '#07F', hover: '#3392FF', active: '#66ADFF' },
	tutoriaColorAccentSoft: { normal: '#99C9FF', hover: '#CCE4FF', active: '#99C9FF' },
	tutoriaColorPrimary: { normal: '#181B1E', hover: '#41474E', active: '#5C646D' },
	tutoriaColorSecondary: { normal: '#F4F5F7', hover: '#E9ECEF', active: '#D4D9DE' },
	tutoriaColorContrast: { normal: 'transparent', hover: '#F4F5F7', active: '#E9ECEF' },
	tutoriaColorSuccess: { normal: '#02D14E', hover: '#34DA71', active: '#66E394' },
	tutoriaColorSuccessSoft: { normal: '#98EDB7', hover: '#CAF6DA', active: '#98EDB7' },
	tutoriaColorWarning: { normal: '#FC9C0A', hover: '#FDB03B', active: '#FED79D' },
	tutoriaColorWarningSoft: { normal: '#FED79D', hover: '#FEEBCE', active: '#FED79D' },
	tutoriaColorError: { normal: '#FF4046', hover: '#FF666B', active: '#FFB3B5' },
	tutoriaColorErrorSoft: { normal: '#FFB3B5', hover: '#FFD9DA', active: '#FFB3B5' },
	tutoriaColorInfo: { normal: '#008DF2', hover: '#33A4F5', active: '#66BBF7' },
	tutoriaColorInfoSoft: { normal: '#99D1FA', hover: '#CCE8FC', active: '#99D1FA' },
};

export const tutoriaTheme: ThemeTutoriaDescription = {
	...lightTheme,
	colors: {
		...lightTheme.colors,
		...tutoriaThemeColors,
		colorBackgroundAccentThemed: tutoriaThemeColors.tutoriaColorAccent,
		colorBackgroundSecondary: tutoriaThemeColors.tutoriaColorSecondary,
		colorBackgroundSecondaryAlpha: tutoriaThemeColors.tutoriaColorSecondary,
		colorTransparent: tutoriaThemeColors.tutoriaColorContrast,
		colorBackgroundNegative: tutoriaThemeColors.tutoriaColorError,
		colorBackgroundPositive: tutoriaThemeColors.tutoriaColorSuccess,
		colorStrokeAccentThemed: '#D4D9DE',
	},
	// sizes

	// fonts
	tutoriaFontFamilyFallbacks,
	tutoriaFontFamilyVK,
	tutoriaFontFamilyRoboto,
	fontTitle1: {
		regular: {
			fontSize: 40,
			fontWeight: 600,
			lineHeight: 44,
			fontFamily: tutoriaFontFamilyVK,
		},
	},

	fontTitle2: {
		regular: {
			fontSize: 32,
			fontWeight: 600,
			lineHeight: 36,
			fontFamily: tutoriaFontFamilyVK,
		},
	},

	fontTitle3: {
		regular: {
			fontSize: 24,
			fontWeight: 600,
			lineHeight: 28,
			fontFamily: tutoriaFontFamilyRoboto,
		},
	},

	fontSubhead: {
		regular: {
			fontSize: 16,
			fontWeight: 500,
			lineHeight: 24,
			fontFamily: tutoriaFontFamilyRoboto,
		},
		compact: {
			fontSize: 14,
			fontWeight: 500,
			lineHeight: 20,
			fontFamily: tutoriaFontFamilyRoboto,
		},
	},

	fontHeadline1: {
		regular: {
			fontSize: 20,
			fontWeight: 600,
			lineHeight: 24,
			fontFamily: tutoriaFontFamilyRoboto,
		},
		compact: {
			fontSize: 16,
			fontWeight: 600,
			lineHeight: 24,
			fontFamily: tutoriaFontFamilyRoboto,
		},
	},

	fontHeadline2: {
		regular: {
			fontSize: 16,
			fontWeight: 600,
			lineHeight: 20,
			fontFamily: tutoriaFontFamilyRoboto,
		},
	},

	tutoriaFontHeadline3: {
		regular: {
			fontSize: 14,
			fontWeight: 600,
			lineHeight: 18,
			fontFamily: tutoriaFontFamilyRoboto,
		},
	},

	tutoriaFontParagraph1: {
		regular: {
			fontSize: 16,
			fontWeight: 400,
			lineHeight: 24,
			fontFamily: tutoriaFontFamilyRoboto,
		},
		compact: {
			fontSize: 16,
			fontWeight: 500,
			lineHeight: 24,
			fontFamily: tutoriaFontFamilyRoboto,
		},
	},

	tutoriaFontParagraph2: {
		regular: {
			fontSize: 14,
			fontWeight: 400,
			lineHeight: 20,
			fontFamily: tutoriaFontFamilyRoboto,
		},
		compact: {
			fontSize: 14,
			fontWeight: 500,
			lineHeight: 20,
			fontFamily: tutoriaFontFamilyRoboto,
		},
	},

	tutoriaFontParagraph3: {
		regular: {
			fontSize: 12,
			fontWeight: 400,
			lineHeight: 16,
			fontFamily: tutoriaFontFamilyRoboto,
		},
		compact: {
			fontSize: 12,
			fontWeight: 500,
			lineHeight: 16,
			fontFamily: tutoriaFontFamilyRoboto,
		},
	},

	// button
	sizeButtonMinimumWidth: {
		regular: 101,
	},

	sizeButtonBaseSmallPaddingHorizontal: {
		regular: 6,
	},
	sizeButtonBaseMediumPaddingHorizontal: {
		regular: 8,
	},
	sizeButtonBaseLargePaddingHorizontal: {
		regular: 10,
	},

	sizeButtonSmallHeight: {
		regular: 28,
	},
	sizeButtonMediumHeight: {
		regular: 36,
	},
	sizeButtonLargeHeight: {
		regular: 44,
	},
	sizeBorderRadius: {
		regular: 12,
	},
};
