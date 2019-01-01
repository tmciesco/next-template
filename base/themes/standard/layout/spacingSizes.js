// Remember: root is set to 10px, or 1.0rem
// These are based off the fibonacci sequence currently
// Different combinations of these sizes can be achieved with different margin/padding vals on neighboring components, or by setting style manually (shouldn't happen often)
import { css } from 'styled-components'

const spaces = {
    none: '0',
    xxs: '0.8rem',
    xs: '1.3rem',
    sm: '2.1rem',
    md: '3.4rem',
    lg: '5.5rem',
    xl: '8.9rem',
    xxl: '14.4rem'
  };


  export const spacingSizes = css`
  padding: ${p => spaces[p.pad]} ;
  padding-top: ${p => spaces[p.pt]};
  padding-right: ${p => spaces[p.pr]};
  padding-bottom: ${p => spaces[p.pb]};
  padding-left: ${p => spaces[p.pl]};
  margin: ${p => spaces[p.mar]};
  margin-top: ${p => spaces[p.mt]};
  margin-right: ${p => spaces[p.mr]};
  margin-bottom: ${p => spaces[p.mb]};
  margin-left: ${p => spaces[p.ml]};
`
  
  export default spacingSizes;
  