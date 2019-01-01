import React from "react"
import { Heading, Paragraph, Wrapper, Navbar, NavbarLogo, NavbarList, NavbarItem, Dropdown, Button, Footer, FooterLogo, FooterList, FooterItem, FlexRow, FlexCol, Section } from "../base"
import Test from "../components/Test"

const Index = () => {
  return (
    <div>
      <Navbar pt="sm" pb="md" bg="danger">
        <NavbarLogo>Logo Here</NavbarLogo>
        <NavbarList>
          <NavbarItem>Link 1</NavbarItem>
          <Dropdown>
            Link 2
            <NavbarList subList>
              <NavbarItem>Research</NavbarItem>
              <NavbarItem>Development</NavbarItem>
              <NavbarItem>Mining</NavbarItem>
            </NavbarList>
          </Dropdown>
          <NavbarItem>
            <a>Link 3</a>
          </NavbarItem>
          <NavbarItem>
            <a>Link 4</a>
          </NavbarItem>
        </NavbarList>
      </Navbar>
      <Section bg="wheat">
      <Wrapper contain centerText>
        <Heading level={2} mt="md" pb="md" color="accent" size="xxlarge">
          Headings
        </Heading>
        <Heading level={1} size="xxlarge" pb="md">
          Heading H1 Size XXL
        </Heading>
        <Heading level={2} size="xlarge" pb="md">
          Heading H2 Size XL
        </Heading>
        <Heading level={3} size="large" pb="md">
          Heading H3 Size L
        </Heading>
        <Heading level={4} size="medium" pb="md">
          Heading H4 Size M
        </Heading>
        <Heading level={5} size="small" pb="md">
          Heading H5 Size SM
        </Heading>
        <Heading level={6} size="xsmall" pb="md">
          Heading H6 Size XS
        </Heading>
        <Heading level={6} size="xxsmall" pb="md">
          Heading H6 Size XXS
        </Heading>
        <Button>Test</Button>
      </Wrapper>
      </Section>

      <Wrapper contain centerText>
        <Heading level={2} pb="md" color="accent" size="xxlarge">
          Paragraph
        </Heading>
        <Paragraph size="large" pb="md">
          Paragraph Size Large
        </Paragraph>
        <Paragraph size="medium" pb="md">
          Paragraph Size Medium
        </Paragraph>
        <Paragraph size="small" pb="md">
          Paragraph Size Small
        </Paragraph>
        <Test />
      </Wrapper>

      <Wrapper contain>
      <FlexRow mt="sm" mb="sm">
        <FlexCol xs="12"><div style={{width: "100%", minWidth: "100px", height: "100px", border: "1px solid black"}}>12</div></FlexCol>
      </FlexRow>
      <FlexRow mt="sm">
        <FlexCol xs="11"><div style={{width: "100%", minWidth: "100px", height: "100px", border: "1px solid black"}}>11</div></FlexCol>
        <FlexCol xs="1"><div style={{width: "100%", minWidth: "100px", height: "100px", border: "1px solid black"}}>1</div></FlexCol>
      </FlexRow>
      <FlexRow mt="sm">
        <FlexCol xs="10"><div style={{width: "100%", minWidth: "100px", height: "100px", border: "1px solid black"}}>10</div></FlexCol>
        <FlexCol xs="2"><div style={{width: "100%", minWidth: "100px", height: "100px", border: "1px solid black"}}>2</div></FlexCol>
      </FlexRow>
      <FlexRow mt="sm">
        <FlexCol xs="9"><div style={{width: "100%", minWidth: "100px", height: "100px", border: "1px solid black"}}>9</div></FlexCol>
        <FlexCol xs="3"><div style={{width: "100%", minWidth: "100px", height: "100px", border: "1px solid black"}}>3</div></FlexCol>
      </FlexRow>
      <FlexRow mt="sm">
        <FlexCol xs="8"><div style={{width: "100%", minWidth: "100px", height: "100px", border: "1px solid black"}}>8</div></FlexCol>
        <FlexCol xs="4"><div style={{width: "100%", minWidth: "100px", height: "100px", border: "1px solid black"}}>4</div></FlexCol>
      </FlexRow>
      <FlexRow mt="sm">
        <FlexCol xs="7"><div style={{width: "100%", minWidth: "100px", height: "100px", border: "1px solid black"}}>7</div></FlexCol>
        <FlexCol xs="5"><div style={{width: "100%", minWidth: "100px", height: "100px", border: "1px solid black"}}>5</div></FlexCol>
      </FlexRow>
      <FlexRow mt="sm" mb="sm">
        <FlexCol xs="6"><div style={{width: "100%", minWidth: "100px", height: "100px", border: "1px solid black"}}>6</div></FlexCol>
        <FlexCol xs="6"><div style={{width: "100%", minWidth: "100px", height: "100px", border: "1px solid black"}}>6</div></FlexCol>
      </FlexRow>
      </Wrapper>



      <Footer bg="accent" pt="sm" pb="sm">
				<FooterLogo>Footer Logo</FooterLogo>

				<FooterList>
					<FooterItem>
						<a href="./sinoc/sinoc.html">Sinoc</a>
					</FooterItem>
					<FooterItem>link</FooterItem>
					<FooterItem>link</FooterItem>
					<FooterItem>link</FooterItem>
					<FooterItem>link</FooterItem>
				</FooterList>
			</Footer>


    </div>
  );
};

export default Index;
