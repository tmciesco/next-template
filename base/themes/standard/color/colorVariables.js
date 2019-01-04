import colors from './colors';

export const semanticColors = {
  colorSuccess: colors.greenDark,
  colorDanger: colors.redDark,
};

export const typographicColors = {
  typeLight: colors.gray30,
  typeMedium: colors.gray50,
  typeDark: colors.black,
  typeAccent: colors.blue,
  typeDanger: colors.red,
  typeSuccess: colors.green,
  typePrimary: colors.primary,
  typeSecondary: colors.secondary
};

export const buttonColors = {
  // Primary
  buttonPrimaryBackground: colors.primary,
  buttonPrimaryBackgroundHover: colors.secondary,
  buttonPrimaryBorder: colors.primary,
  buttonPrimaryText: colors.white,

  // Secondary
  buttonSecondaryBackground: colors.white,
  buttonSecondaryBackgroundHover: colors.gray15,
  buttonSecondaryBorder: colors.gray40,
  buttonSecondaryColor: colors.black,

  // Danger
  buttonDangerBackground: semanticColors.colorDanger,
  buttonDangerBackgroundHover: colors.redDark1,
  buttonDangerBorder: semanticColors.colorDanger,
  buttonDangerText: colors.white,

  // Success
  buttonSuccessBackground: semanticColors.colorSuccess,
  buttonSuccessBackgroundHover: colors.greenDark1,
  buttonSuccessBorder: semanticColors.colorSuccess,
  buttonSuccessText: colors.white,
};

const colorVariables = {
  // Semantic Colors
  semantic: {
    ...semanticColors,
  },

  // Typographic Colors
  typographic: {
    ...typographicColors,
  },

  // Button Colors
  buttons: {
    ...buttonColors,
  },
};

export default colorVariables;
