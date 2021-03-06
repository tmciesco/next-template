import PropTypes from 'prop-types';

import { StyledButton, buttonModes, buttonSizes } from './Styles';

export const Button = ({ children, mode, onClick, size, ...others }) => (
  <StyledButton
    onClick={onClick}
    mode={mode}
    size={size}
    {...others}
  >
    {children}
  </StyledButton>
);

export const ButtonModes = Object.keys(buttonModes);
export const ButtonSizes = Object.keys(buttonSizes);

Button.propTypes = {
  /** Content to be rendered inside a Button */
  children: PropTypes.node,
  /** Mode of the button. Options are 'primary', 'secondary', 'danger', 'success' */
  mode: PropTypes.oneOf(ButtonModes),
  /** Function to run on click */
  onClick: PropTypes.func,
  /** Size of the button. Options are 'small', 'medium', 'large' */
  size: PropTypes.oneOf(ButtonSizes),
};

Button.defaultProps = {
  mode: 'primary',
  onClick: () => {},
  size: 'medium',
};
