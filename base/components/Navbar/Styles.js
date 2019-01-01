import styled, { css } from "styled-components"

import theme from '../../Theme'

const { typography, typographicColors, semanticColors, spacingSizes } = theme

export const navSizes = {
  small: typography.finePrint,
  medium: typography.body,
  large: typography.bodyLarge,
};

export const navColors = {
  light: typographicColors.typeLight,
  medium: typographicColors.typeMedium,
  dark: typographicColors.typeDark,
  accent: typographicColors.typeAccent,
  success: semanticColors.colorSuccess,
  danger: semanticColors.colorDanger,
};

export const navHoverColors = navColors

export const navBgColors = navColors

export const NavbarStyles = styled.header`
  color: ${p => navColors[p.color]};
  ${p => navSizes[p.size]};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 1px solid black;
  background: ${p => navBgColors[p.bg]};
  ${spacingSizes};
`;

export const NavbarItemStyles = styled.li`
  text-align: center;
  cursor: pointer;
  color: ${p => navColors[p.color]};
  ${p => navSizes[p.size]};
  position: relative;
  ${spacingSizes};

  &:hover {
    color: ${p => navHoverColors[p.hover]};
  }
`;

export const NavbarListStyles = styled.ul`
  list-style: none;
  display: flex;
  flex: 0 1 30%;
  justify-content: space-between;
  color: ${p => navColors[p.color]};
  ${p => navSizes[p.size]};
  ${spacingSizes};

  ${props =>
    props.subList === true &&
    css`
      flex-direction: column;
      align-items: flex-start;
      position: absolute;
      left: 0;
      margin-top: 0;
      visibility: hidden;
      display: none;

      ${NavbarItemStyles}:hover & {
        visibility: visible;
        opacity: 1;
        display: flex;
        color: black;
        background-color: ${navColors.light};
      }
    `}
`;
