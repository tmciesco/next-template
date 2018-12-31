import PropTypes from 'prop-types';
import React from 'react';

import { listElements, listSizes, listColors } from './Styles';

export const List = ({ children, color, type, size, ...others }) => {
  const ListElement = listElements[`${type}`];
  return (
    <ListElement
      color={color}
      size={size}
      {...others}
    >
      {children}
    </ListElement>
  );
};

export const ListColors = Object.keys(listColors);
export const ListTypes = ['ol', 'ul'];
export const ListSizes = Object.keys(listSizes);

List.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Color of the Heading. Options are 'dark', 'medium', 'light', 'accent', 'danger', and 'success' */
  color: PropTypes.oneOf(ListColors),
  /** Hierarchy level of the Heading (ex: h3) */
  type: PropTypes.oneOf(ListTypes),
  /** Size of the Heading. Options are 'xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge' */
  size: PropTypes.oneOf(ListSizes),
};

List.defaultProps = {
  color: 'dark',
  type: 'ul',
  size: 'medium',
};
