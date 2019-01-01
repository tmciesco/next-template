import SectionStyles from './Styles'

export const Section = ({ children, ...others}) => {
  return (
    <SectionStyles {...others}>
      {children}
    </SectionStyles>
  )
}
