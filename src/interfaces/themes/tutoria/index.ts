import { ThemeCssVars } from '@/interfaces/general';
import {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '@/interfaces/general/colors';
import { Adaptive } from '@/interfaces/general/tools';
import { Font } from '@/interfaces/general/typography';
import { ThemeVkBase, ThemeVkBaseDescription } from '@/interfaces/themes/vkBase';

export interface ThemeTutoriaLocalSizes {
	tutoriaSizePaddingCard: number;
	tutoriaLayoutMaxWidth: number;
}

export interface ThemeTutoriaOverValues {
	// кастомные шрифты
}

export interface LocalTutoriaColorsDescriptionStruct {
	// токены цветов тутории
	colorBackdropContrast: ColorDescription;
	colorBackgroundWarning: ColorDescription;
	colorBackgroundWarningTint: ColorDescription;
	colorBackgroundAccentTint: ColorDescription;
	colorBackgroundColorPrimary: ColorDescription;
	colorBackgroundPositiveTint: ColorDescription;
	colorBackgroundNegativeTint: ColorDescription;
	colorBackgroundInfo: ColorDescription;
	colorBackgroundInfoTint: ColorDescription;
	tutoriaColorCardBoxShadow: ColorDescription;

	colorTextWarning: ColorDescription;
	colorTextInfo: ColorDescription;
}

export interface LocalTutoriaFontStruct {
	tutoriaFontHeadline3: Font;
	tutoriaFontParagraph1: Font;
	tutoriaFontParagraph2: Font;
	tutoriaFontParagraph3: Font;
}
type ThemeTutoriaAdaptiveValues = LocalTutoriaFontStruct & ThemeTutoriaLocalSizes;
type ThemeTutoriaAdaptiveTokens = {
	[key in keyof ThemeTutoriaAdaptiveValues]: Adaptive<ThemeTutoriaAdaptiveValues[key]>;
};

export type TutoriaLocalColors = {
	[key in keyof LocalTutoriaColorsDescriptionStruct]: ColorWithStates;
};

export interface ThemeTutoriaDescription
	extends ThemeVkBaseDescription,
		ThemeTutoriaOverValues,
		ThemeTutoriaAdaptiveTokens {
	colors: LocalTutoriaColorsDescriptionStruct & ColorsDescriptionStruct;
}
export interface ThemeTutoria
	extends ThemeVkBase,
		ThemeTutoriaOverValues,
		TutoriaLocalColors,
		ThemeTutoriaAdaptiveTokens {}

export interface ThemeTutoriaCssVars extends ThemeCssVars<ThemeTutoria> {}
