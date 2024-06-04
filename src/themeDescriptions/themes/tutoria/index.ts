import {
	LocalTutoriaColorsDescriptionStruct,
	ThemeTutoriaDescription,
} from '@/interfaces/themes/tutoria';
import { darkTheme, lightTheme } from '@/themeDescriptions/base/vk';

const fontFamilyFallbacks = 'Helvetica, Arial, sans-serif';
const fontFamilyAccent = `VKSansDisplay, ${fontFamilyFallbacks}`;
const fontFamilyBase = `Roboto, ${fontFamilyFallbacks}`;

export const tutoriaThemeColors: LocalTutoriaColorsDescriptionStruct = {
	colorBackdropContrast: '#FFFFFF',
	colorBackgroundAccentTint: { normal: '#99C9FF', hover: '#CCE4FF', active: '#99C9FF' },
	colorBackgroundColorPrimary: { normal: '#181B1E', hover: '#41474E', active: '#5C646D' },
	colorBackgroundPositiveTint: { normal: '#98EDB7', hover: '#CAF6DA', active: '#98EDB7' },
	colorBackgroundWarning: { normal: '#FC9C0A', hover: '#FDB03B', active: '#FED79D' },
	colorBackgroundWarningTint: { normal: '#FED79D', hover: '#FEEBCE', active: '#FED79D' },
	colorBackgroundNegativeTint: { normal: '#FFB3B5', hover: '#FFD9DA', active: '#FFB3B5' },
	colorBackgroundInfo: { normal: '#008DF2', hover: '#33A4F5', active: '#66BBF7' },
	colorBackgroundInfoTint: { normal: '#99D1FA', hover: '#CCE8FC', active: '#99D1FA' },
	tutoriaColorCardBoxShadow: 'rgba(37, 41, 46, 0.04)',
};

export const tutoriaTheme: ThemeTutoriaDescription = {
	...lightTheme,
	themeName: 'tutoria',
	themeNameBase: 'tutoria',
	colors: {
		...lightTheme.colors,
		...tutoriaThemeColors,
		colorBackgroundContrast: { normal: 'transparent', hover: '#F4F5F7', active: '#E9ECEF' },
		colorBackgroundAccent: { normal: '#07F', hover: '#3392FF', active: '#66ADFF' },
		colorBackgroundSecondary: { normal: '#F4F5F7', hover: '#E9ECEF', active: '#D4D9DE' },
		colorBackgroundSecondaryAlpha: { normal: '#F4F5F7', hover: '#E9ECEF', active: '#D4D9DE' },
		colorTransparent: { normal: 'transparent', hover: '#F4F5F7', active: '#E9ECEF' },
		colorBackgroundNegative: { normal: '#FF4046', hover: '#FF666B', active: '#FFB3B5' },
		colorBackgroundPositive: { normal: '#02D14E', hover: '#34DA71', active: '#66E394' },
		colorStrokeAccentThemed: '#D4D9DE',
	},

	// sizes
	tutoriaSizePaddingCard: {
		regular: 24,
	},
	tutoriaLayoutMaxWidth: {
		regular: 1224,
	},

	// fonts
	fontFamilyFallbacks,
	fontFamilyAccent,
	fontFamilyBase,
	fontTitle1: {
		regular: {
			fontSize: 40,
			fontWeight: 600,
			lineHeight: 44,
			fontFamily: fontFamilyAccent,
		},
		compact: {
			fontSize: 24,
			fontWeight: 600,
			lineHeight: 28,
			fontFamily: fontFamilyAccent,
		},
	},

	fontTitle2: {
		regular: {
			fontSize: 32,
			fontWeight: 600,
			lineHeight: 36,
			fontFamily: fontFamilyAccent,
		},
		compact: {
			fontSize: 20,
			fontWeight: 600,
			lineHeight: 24,
			fontFamily: fontFamilyAccent,
		},
	},

	fontTitle3: {
		regular: {
			fontSize: 24,
			fontWeight: 600,
			lineHeight: 28,
			fontFamily: fontFamilyAccent,
		},
		compact: {
			fontSize: 16,
			fontWeight: 600,
			lineHeight: 24,
			fontFamily: fontFamilyAccent,
		},
	},

	fontSubhead: {
		regular: {
			fontSize: 16,
			fontWeight: 500,
			lineHeight: 24,
			fontFamily: fontFamilyBase,
		},
		compact: {
			fontSize: 14,
			fontWeight: 500,
			lineHeight: 20,
			fontFamily: fontFamilyBase,
		},
	},

	fontHeadline1: {
		regular: {
			fontSize: 20,
			fontWeight: 600,
			lineHeight: 24,
			fontFamily: fontFamilyBase,
		},
		compact: {
			fontSize: 16,
			fontWeight: 600,
			lineHeight: 24,
			fontFamily: fontFamilyBase,
		},
	},

	fontHeadline2: {
		regular: {
			fontSize: 16,
			fontWeight: 600,
			lineHeight: 20,
			fontFamily: fontFamilyBase,
		},
	},

	tutoriaFontHeadline3: {
		regular: {
			fontSize: 14,
			fontWeight: 600,
			lineHeight: 18,
			fontFamily: fontFamilyBase,
		},
	},

	tutoriaFontParagraph1: {
		regular: {
			fontSize: 16,
			fontWeight: 400,
			lineHeight: 24,
			fontFamily: fontFamilyBase,
		},
		compact: {
			fontSize: 16,
			fontWeight: 500,
			lineHeight: 24,
			fontFamily: fontFamilyBase,
		},
	},

	tutoriaFontParagraph2: {
		regular: {
			fontSize: 14,
			fontWeight: 400,
			lineHeight: 20,
			fontFamily: fontFamilyBase,
		},
		compact: {
			fontSize: 14,
			fontWeight: 500,
			lineHeight: 20,
			fontFamily: fontFamilyBase,
		},
	},

	tutoriaFontParagraph3: {
		regular: {
			fontSize: 12,
			fontWeight: 400,
			lineHeight: 16,
			fontFamily: fontFamilyBase,
		},
		compact: {
			fontSize: 12,
			fontWeight: 500,
			lineHeight: 16,
			fontFamily: fontFamilyBase,
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

	// layout
	sizeSplitColPaddingHorizontal: {
		regular: 24,
	},
};

export const tutoriaDarkTheme = {
	...tutoriaTheme,
	themeName: 'tutoriaDark',

	colors: {
		...tutoriaTheme.colors,
		...darkTheme.colors,
	},
};
