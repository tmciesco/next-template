import React from "react"
import { Heading, Paragraph, Wrapper, Navbar, NavbarLogo, NavbarList, NavbarItem, Dropdown, Button } from "../base"
import Test from "../components/Test"

const Index = () => {
  return (
    <div>
      <Navbar pt="sm" pb="md">
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
    </div>
  );
};

export default Index;
