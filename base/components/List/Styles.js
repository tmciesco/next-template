import styled from 'styled-components';

import typography from '../../../base/typography/typography';
import { semanticColors, typographicColors } from '../../../base/color/colorVariables';

export const listSizes = {
    small: typography.finePrint,
    medium: typography.body,
    large: typography.bodyLarge,
  };

  export const listColors = {
    light: typographicColors.typeLight,
    medium: typographicColors.typeMedium,
    dark: typographicColors.typeDark,
    accent: typographicColors.typeAccent,
    success: semanticColors.colorSuccess,
    danger: semanticColors.colorDanger,
  };

  export const StyledListItem= styled.li`
  color: ${p => listColors[p.color]};
  ${p => listSizes[p.size]};
  ${p => p.noMargin && 'margin: 0'};
`;
  
  const ListBase = styled.span`
    margin: 0;
    color: ${p => listColors[p.color]};
    ${p => listSizes[p.size]};
  `;
  
  export const listElements = {
    ol: ListBase.withComponent('ol'),
    ul: ListBase.withComponent('ul')
  };
