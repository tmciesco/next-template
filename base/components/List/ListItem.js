import PropTypes from 'prop-types';
import React from 'react';

import { StyledListItem, listSizes, listColors } from './Styles';

export const ListItem = ({ children, color, noMargin, size, ...others }) => (
  <StyledListItem
    color={color}
    noMargin={noMargin}
    size={size}
    {...others}
  >
    {children}
  </StyledListItem>
);

export const ListSizes = Object.keys(listSizes);
export const ListColors = Object.keys(listColors);

ListItem.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Color of the Paragraph. Options are 'dark', 'medium', 'light', 'accent', 'success', and 'danger' */
  color: PropTypes.oneOf(ListColors),
  /** If set, removes margin on Paragraph instance */
  noMargin: PropTypes.bool,
  /** Size of the Paragraph. Options are 'small', 'medium', 'large' */
  size: PropTypes.oneOf(ListSizes),
};

ListItem.defaultProps = {
  color: 'dark',
  size: 'medium',
};
