import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    font-size: 62.5%;
}

body {
    box-sizing: border-box;
	font-family: 'Lato', Helvetica, sans-serif;
	line-height: 1.6;
}

a {
    text-decoration: none;
	color: none;
}
`

export default GlobalStyle