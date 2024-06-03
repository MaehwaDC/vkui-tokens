import { ColorDescription, ColorsDescriptionStruct } from '@/interfaces/general/colors';
import { Adaptive } from '@/interfaces/general/tools';
import { Font } from '@/interfaces/general/typography';
import { ThemeVkBaseDescription } from '@/interfaces/themes/vkBase';

export interface ThemeTutoriaLocalSizes {}

export interface ThemeTutoriaOverValues {
	// кастомные шрифты
	tutoriaFontFamilyFallbacks: string;
	tutoriaFontFamilyRoboto: string;
	tutoriaFontFamilyVK: string;
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
type ThemeTutoriaAdaptiveValues = LocalTutoriaFontStruct;
type ThemeTutoriaAdaptiveTokens = {
	[key in keyof ThemeTutoriaAdaptiveValues]: Adaptive<ThemeTutoriaAdaptiveValues[key]>;
};

export interface ThemeTutoriaDescription
	extends ThemeVkBaseDescription,
		ThemeTutoriaOverValues,
		ThemeTutoriaAdaptiveTokens {
	colors: LocalTutoriaColorsDescriptionStruct & ColorsDescriptionStruct;
}
