import styled from 'styled-components';

import theme from '../../Theme'

const { typography, typographicColors, semanticColors, spacingSizes } = theme

export const headingSizes = {
  xxlarge: typography.headingXXLarge,
  xlarge: typography.headingXLarge,
  large: typography.headingLarge,
  medium: typography.headingMedium,
  small: typography.headingSmall,
  xsmall: typography.headingXSmall,
  xxsmall: typography.headingXXSmall,
};

export const headingColors = {
  light: typographicColors.typeLight,
  medium: typographicColors.typeMedium,
  dark: typographicColors.typeDark,
  accent: typographicColors.typeAccent,
  danger: semanticColors.colorDanger,
  success: semanticColors.colorSuccess,
};

const HeadingBase = styled.span`
  color: ${p => headingColors[p.color]};
  ${p => headingSizes[p.size]};
  padding: ${p => spacingSizes[p.pad]} ;
  padding-top: ${p => spacingSizes[p.pt]};
  padding-right: ${p => spacingSizes[p.pr]};
  padding-bottom: ${p => spacingSizes[p.pb]};
  padding-left: ${p => spacingSizes[p.pl]};
  margin: ${p => spacingSizes[p.mar]};
  margin-top: ${p => spacingSizes[p.mt]};
  margin-right: ${p => spacingSizes[p.mr]};
  margin-bottom: ${p => spacingSizes[p.mb]};
  margin-left: ${p => spacingSizes[p.ml]};
`;

export const headingElements = {
  h1: HeadingBase.withComponent('h1'),
  h2: HeadingBase.withComponent('h2'),
  h3: HeadingBase.withComponent('h3'),
  h4: HeadingBase.withComponent('h4'),
  h5: HeadingBase.withComponent('h5'),
  h6: HeadingBase.withComponent('h6'),
};
