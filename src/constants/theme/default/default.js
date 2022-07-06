/**
 * The file contents for the theme constants.
 * All the default theme style guide related constants must be place here.
 */

const THEME_DEFAULT = (variables) => {
  return {
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 992,
        lg: 1200,
        xl: 1400
      }
    },
    palette: {
      primary: {
        light: variables.palettePrimaryLight,
        main: variables.palettePrimaryMain,
        dark: variables.palettePrimaryDark,
        contrastText: variables.palettePrimaryContrastText
      },
      secondary: {
        light: variables.paletteSecondaryLight,
        main: variables.paletteSecondaryMain,
        dark: variables.paletteSecondaryDark,
        contrastText: variables.paletteSecondaryContrastText
      },
      error: {
        light: variables.paletteErrorLight,
        main: variables.paletteErrorMain,
        dark: variables.paletteErrorDark,
        contrastText: variables.paletteErrorContrastText
      },
      warning: {
        light: variables.paletteWarningLight,
        main: variables.paletteWarningMain,
        dark: variables.paletteWarningDark,
        contrastText: variables.paletteWarningContrastText
      },
      info: {
        light: variables.paletteInfoLight,
        main: variables.paletteInfoMain,
        dark: variables.paletteInfoDark,
        contrastText: variables.paletteInfoContrastText
      },
      success: {
        light: variables.paletteSuccessLight,
        main: variables.paletteSuccessMain,
        dark: variables.paletteSuccessDark,
        contrastText: variables.paletteSuccessContrastText
      },
      grey: {
        50: variables.paletteGrey50,
        100: variables.paletteGrey100,
        200: variables.paletteGrey200,
        300: variables.paletteGrey300,
        400: variables.paletteGrey400,
        500: variables.paletteGrey500,
        600: variables.paletteGrey600,
        700: variables.paletteGrey700,
        800: variables.paletteGrey800,
        900: variables.paletteGrey900,
        A100: variables.paletteGreyA100,
        A200: variables.paletteGreyA200,
        A400: variables.paletteGreyA400,
        A700: variables.paletteGreyA700
      },
      text: {
        primary: variables.paletteTextPrimary,
        secondary: variables.paletteTextSecondary,
        disabled: variables.paletteTextDisabled,
        hint: variables.paletteTextHint,
        icon: variables.paletteTextIcon,
        divider: variables.paletteTextDivider
      },
      background: {
        paper: variables.paletteBackgroundPaper,
        default: variables.paletteBackgroundDefault
      },
      action: {
        active: variables.paletteActionActive,
        hover: variables.paletteActionHover,
        hoverOpacity: parseInt(variables.paletteActionOpacity, 10),
        selected: variables.paletteActionSelected,
        selectedOpacity: parseInt(variables.paletteActionSelectedOpacity, 10),
        disabled: variables.paletteActionDisabled,
        disabledBackground: variables.paletteActionDisabledBackground,
        disabledOpacity: parseInt(variables.paletteActionDisabledOpacity, 10),
        focus: variables.paletteActionFocus,
        focusOpacity: parseInt(variables.paletteActionFocusOpacity, 10),
        activatedOpacity: parseInt(variables.paletteActionActivatedOpacity, 10)
      }
    },
    typography: {
      htmlFontSize: parseInt(variables.typographyHtmlFontSize, 10),
      fontFamily: variables.typographyFontFamily,
      fontSize: parseInt(variables.typographyFontSize, 10),
      fontWeightLight: variables.typographyFontWeightLight,
      fontWeightRegular: variables.typographyFontWeightRegular,
      fontWeightMedium: variables.typographyFontWeightMedium,
      fontWeightBold: variables.typographyFontWeightBold,
      h1: {
        fontFamily: variables.typographyH1FontFamily,
        fontWeight: variables.typographyH1FontWeight,
        fontSize: variables.typographyH1FontSize,
        lineHeight: variables.typographyH1LineHeight,
        letterSpacing: variables.typographyH1LetterSpacing
      },

      h2: {
        fontFamily: variables.typographyH2FontFamily,
        fontWeight: variables.typographyH2FontWeight,
        fontSize: variables.typographyH2FontSize,
        lineHeight: variables.typographyH2LineHeight,
        letterSpacing: variables.typographyH2LetterSpacing
      },
      h3: {
        fontFamily: variables.typographyH3FontFamily,
        fontWeight: variables.typographyH3FontWeight,
        fontSize: variables.typographyH3FontSize,
        lineHeight: variables.typographyH3LineHeight,
        letterSpacing: variables.typographyH3LetterSpacing
      },
      h4: {
        fontFamily: variables.typographyH4FontFamily,
        fontWeight: variables.typographyH4FontWeight,
        fontSize: variables.typographyH4FontSize,
        lineHeight: variables.typographyH4LineHeight,
        letterSpacing: variables.typographyH4LetterSpacing
      },
      h5: {
        fontFamily: variables.typographyH5FontFamily,
        fontWeight: variables.typographyH5FontWeight,
        fontSize: variables.typographyH5FontSize,
        lineHeight: variables.typographyH5LineHeight,
        letterSpacing: variables.typographyH5LetterSpacing
      },
      h6: {
        fontFamily: variables.typographyH6FontFamily,
        fontWeight: variables.typographyH6FontWeight,
        fontSize: variables.typographyH6FontSize,
        lineHeight: variables.typographyH6LineHeight,
        letterSpacing: variables.typographyH6LetterSpacing
      },
      subtitle1: {
        fontFamily: variables.typographySubtitle1FontFamily,
        fontWeight: variables.typographySubtitle1FontWeight,
        fontSize: variables.typographySubtitle1FontSize,
        lineHeight: variables.typographySubtitle1LineHeight,
        letterSpacing: variables.typographySubtitle1LetterSpacing
      },
      subtitle2: {
        fontFamily: variables.typographySubtitle2FontFamily,
        fontWeight: variables.typographySubtitle2FontWeight,
        fontSize: variables.typographySubtitle2FontSize,
        lineHeight: variables.typographySubtitle2LineHeight,
        letterSpacing: variables.typographySubtitle2LetterSpacing
      },
      body1: {
        fontFamily: variables.typographyBody1FontFamily,
        fontWeight: variables.typographyBody1FontWeight,
        fontSize: variables.typographyBody1FontSize,
        lineHeight: variables.typographyBody1LineHeight,
        letterSpacing: variables.typographyBody1LetterSpacing
      },
      body2: {
        fontFamily: variables.typographyBody2FontFamily,
        fontWeight: variables.typographyBody2FontWeight,
        fontSize: variables.typographyBody2FontSize,
        lineHeight: variables.typographyBody2LineHeight,
        letterSpacing: variables.typographyBody2LetterSpacing
      },
      button: {
        fontFamily: variables.typographyButtonFontFamily,
        fontWeight: variables.typographyButtonFontWeight,
        fontSize: variables.typographyButtonFontSize,
        letterSpacing: variables.typographyButtonLetterSpacing,
        textTransform: variables.typographyButtonTextTransform
      },
      caption: {
        fontFamily: variables.typographyCaptionFontFamily,
        fontWeight: variables.typographyCaptionFontWeight,
        fontSize: variables.typographyCaptionFontSize,
        letterSpacing: variables.typographyCaptionLetterSpacing
      },
      overline: {
        fontFamily: variables.typographyOverlayFontFamily,
        fontWeight: variables.typographyOverlayFontWeight,
        fontSize: variables.typographyOverlayFontSize,
        letterSpacing: variables.typographyOverlayLetterSpacing,
        textTransform: variables.typographyOverlayTextTransform
      }
    },
    shape: {
      borderRadius: parseInt(variables.shapeBorderRadius, 10)
    },
    zIndex: {
      mobileStepper: 1000,
      speedDial: 1050,
      appBar: 1250,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500
    }
  };
};

export default THEME_DEFAULT;
