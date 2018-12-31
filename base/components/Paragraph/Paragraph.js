import PropTypes from 'prop-types';
import React from 'react';

import { StyledParagraph, paragraphSizes, paragraphColors } from './Styles';
import theme from '../../Theme'

export const Paragraph = ({ children, color, noMargin, size, pad, pt, pr, pb, pl, mar, mt, mr, mb, ml, ...others }) => (
  <StyledParagraph
    color={color}
    noMargin={noMargin}
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
  </StyledParagraph>
);

export const ParagraphSizes = Object.keys(paragraphSizes);
export const ParagraphColors = Object.keys(paragraphColors);
export const SpacingSizes = Object.keys(theme.spacingSizes);

Paragraph.propTypes = {
  /** @ignore */
  children: PropTypes.node,
  /** Color of the Paragraph. Options are 'dark', 'medium', 'light', 'accent', 'success', and 'danger' */
  color: PropTypes.oneOf(ParagraphColors),
  /** If set, removes margin on Paragraph instance */
  noMargin: PropTypes.bool,
  /** If set, removes the max-width on Paragraph instance */
  noMaxWidth: PropTypes.bool,
  /** Size of the Paragraph. Options are 'small', 'medium', 'large' */
  size: PropTypes.oneOf(ParagraphSizes),
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

Paragraph.defaultProps = {
  color: 'dark',
  size: 'medium',
};
