import { NavbarStyles, NavbarListStyles, NavbarItemStyles, NavbarLogoStyles } from "./Styles";

export const Navbar = ({ children, ...others }) => {
  return <NavbarStyles {...others}>{children}</NavbarStyles>;
};

export const NavbarLogo = ({ children, ...others }) => {
  return <NavbarLogoStyles {...others}>{children}</NavbarLogoStyles>;
};

export const NavbarList = ({ children, ...others }) => {
  return <NavbarListStyles {...others}>{children}</NavbarListStyles>;
};

export const NavbarItem = ({ children, ...others }) => {
  return <NavbarItemStyles {...others}>{children}</NavbarItemStyles>;
};

export const Dropdown = ({ children, ...others }) => {
  return <NavbarItemStyles {...others}>{children}</NavbarItemStyles>;
};

Navbar.defaultProps = {
  color: "dark",
  size: "medium"
};

NavbarItem.defaultProps = {
  color: "dark",
  size: "large",
  hover: "accent"
};

Dropdown.defaultProps = {
	color: 'dark',
	size: 'large',
	hover: "accent"
  };

NavbarList.defaultProps = {
	color: 'dark',
	size: 'medium',
};
