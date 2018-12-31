import styled, { css } from 'styled-components'
import theme from '../../Theme'

const { contentContainer } = theme

const ContainerStyles = styled.div`
width: ${props => props.w}%;
margin: 0 auto;

${props => props.contain && css`
    width: ${contentContainer};
`}

${props => props.centerText && css`
    text-align: center;
`}
`

export default ContainerStyles