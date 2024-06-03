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
}

export interface ThemeTutoriaOverValues {
	// кастомные шрифты
}

export interface LocalTutoriaColorsDescriptionStruct {
	// токены цветов тутории
	tutoriaColorAccent: ColorDescription;
	tutoriaColorPrimary: ColorDescription;
	tutoriaColorSecondary: ColorDescription;
	tutoriaColorContrast: ColorDescription;
	tutoriaColorAccentSoft: ColorDescription;
	tutoriaColorSuccess: ColorDescription;
	tutoriaColorSuccessSoft: ColorDescription;
	tutoriaColorWarning: ColorDescription;
	tutoriaColorWarningSoft: ColorDescription;
	tutoriaColorError: ColorDescription;
	tutoriaColorErrorSoft: ColorDescription;
	tutoriaColorInfo: ColorDescription;
	tutoriaColorInfoSoft: ColorDescription;
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
