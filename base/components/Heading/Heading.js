import PropTypes from 'prop-types';
import React from 'react';

import theme from '../../Theme'
import { headingSizes, headingColors, headingElements } from './Styles';

export const Heading = ({ children, color, level, size, pad, pt, pr, pb, pl, mar, mt, mr, mb, ml, ...others }) => {
  const HeadingElement = headingElements[`h${level}`];
  return (
    <HeadingElement
      color={color}
      size={size}
      pad={pad}
      pt={pt}
      pr={pr}
      pb={pb}
      pl={pl}
      mar={mar}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      {...others}
    >
      {children}
    </HeadingElement>
  );
};

export const HeadingColors = Object.keys(headingColors);
export const HeadingLevels = [1, 2, 3, 4, 5, 6];
export const HeadingSizes = Object.keys(headingSizes);
export const SpacingSizes = Object.keys(theme.spacingSizes);

Heading.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Color of the Heading. Options are 'dark', 'medium', 'light', 'accent', 'danger', and 'success' */
  color: PropTypes.oneOf(HeadingColors),
  /** Hierarchy level of the Heading (ex: h3) */
  level: PropTypes.oneOf(HeadingLevels),
  /** Size of the Heading. Options are 'xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge' */
  size: PropTypes.oneOf(HeadingSizes),
  pad: PropTypes.oneOf(SpacingSizes),
  pt: PropTypes.oneOf(SpacingSizes),
  pr: PropTypes.oneOf(SpacingSizes),
  pb: PropTypes.oneOf(SpacingSizes),
  pl: PropTypes.oneOf(SpacingSizes),
  mar: PropTypes.oneOf(SpacingSizes),
  mt: PropTypes.oneOf(SpacingSizes),
  mr: PropTypes.oneOf(SpacingSizes),
  mb: PropTypes.oneOf(SpacingSizes),
  ml: PropTypes.oneOf(SpacingSizes),

};

Heading.defaultProps = {
  color: 'dark',
  level: 2,
  size: 'medium'
};
