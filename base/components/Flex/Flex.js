import PropTypes from 'prop-types'

import { FlexRowStyles, FlexColStyles, columnSizes } from './Styles'

export const FlexRow = ({ children, ...others }) => {
	return <FlexRowStyles {...others}>{children}</FlexRowStyles>
}

export const FlexCol = ({ children, xs, ...others }) => {
	return (
	  <FlexColStyles
		xs={xs}
		{...others}
	  >
		{children}
	  </FlexColStyles>
	);
  };

const ColumnSizes = Object.keys(columnSizes);

FlexCol.propTypes = {
        /** @ignore */
        /** Size of the Column on the xs screen size. Options are 1 through 12 */
        xs: PropTypes.oneOf(ColumnSizes),
        sm: PropTypes.oneOf(ColumnSizes),
        md: PropTypes.oneOf(ColumnSizes),
        lg: PropTypes.oneOf(ColumnSizes),
        xl: PropTypes.oneOf(ColumnSizes),
        xxl: PropTypes.oneOf(ColumnSizes),
    };