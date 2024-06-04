import { ThemeCssVars } from '@/interfaces/general';
import {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '@/interfaces/general/colors';
import { Adaptive } from '@/interfaces/general/tools';
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

	colorBackdropContrast: ColorDescription;
	colorBackdropAccent: ColorDescription;
	colorBackdropPrimary: ColorDescription;
	colorBackdropSecondary: ColorDescription;
	colorBackdropInverse: ColorDescription;
	colorBackdropOverlay: ColorDescription;
	colorBackdropNeutral: ColorDescription;
	colorBackdropPositive: ColorDescription;
	colorBackdropNegative: ColorDescription;
	colorBackdropWarning: ColorDescription;
	colorBackdropInfo: ColorDescription;

	colorIconInfo: ColorDescription;
	colorIconLink: ColorDescription;

	colorSeparatorPrimaryAlpha: ColorDescription;
	colorSeparatorSecondaryAlpha: ColorDescription;

	colorStrokePrimary: ColorDescription;
	colorStrokeSecondary: ColorDescription;
	colorStrokeTertiary: ColorDescription;
	colorStrokeAccentTint: ColorDescription;
	colorStrokePositiveTint: ColorDescription;
	colorStrokeWarning: ColorDescription;
	colorStrokeWarningTint: ColorDescription;
	colorStrokeNegativeTint: ColorDescription;
	colorStrokeInfo: ColorDescription;
	colorStrokeInfoTint: ColorDescription;
}

export interface LocalTutoriaFontStruct {}

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
