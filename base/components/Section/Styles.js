import styled from 'styled-components'

import theme from '../../Theme'

const { spacingSizes } = theme

const SectionStyles = styled.section`
min-height: ${props => props.height};
background: ${props => props.bg};
${spacingSizes};
`

export default SectionStyles