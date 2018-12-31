import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components"

import Meta from "./Meta"
import GlobalStyle from './GlobalStyle'
import theme from './Theme'

const StyledPage = styled.div`
`

const Inner = styled.div`
`

class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<StyledPage>
					<GlobalStyle />
					<Meta />
					<Inner>{this.props.children}</Inner>
				</StyledPage>
			</ThemeProvider>
		)
	}
}

export default Page
