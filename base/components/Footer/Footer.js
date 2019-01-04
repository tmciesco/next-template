import { FooterStyles, FooterListStyles, FooterItemStyles, FooterLogoStyles } from "./Styles"

export const Footer = ({ children, ...others }) => {
    return <FooterStyles {...others}>{children}</FooterStyles>;
  };
  
  export const FooterLogo = ({ children, ...others }) => {
    return <FooterLogoStyles {...others}>{children}</FooterLogoStyles>;
  };
  
  export const FooterList = ({ children, ...others }) => {
    return <FooterListStyles {...others}>{children}</FooterListStyles>;
  };
  
  export const FooterItem = ({ children, ...others }) => {
    return <FooterItemStyles {...others}>{children}</FooterItemStyles>;
  };
  
  Footer.defaultProps = {
    color: "dark",
    size: "medium"
  };
  
  FooterItem.defaultProps = {
    color: "dark",
    size: "large",
    hover: "accent"
  };
  
  FooterList.defaultProps = {
      color: 'dark',
      size: 'medium',
  };