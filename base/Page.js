import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components"

import Meta from "./Meta"
import GlobalStyle from './GlobalStyle'
import theme from './Theme'
import SiteNavbar from "../components-site/SiteNavbar";
import SiteFooter from "../components-site/SiteFooter";

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
					<SiteNavbar />
					<Inner>{this.props.children}</Inner>
					<SiteFooter />
				</StyledPage>
			</ThemeProvider>
		)
	}
}

export default Page
