import styled, { css } from 'styled-components'

import theme from '../../Theme'

const { spacingSizes, mediaQueries } = theme

export const columnSizes = {
	1: '8.333%',
	2: '16.666%',
	3: '25%',
	4: '33.333%',
	5: '41.666%',
	6: '50%',
	7: '58.333%',
	8: '66.666%',
	9: '75%',
	10: '83.333%',
	11: '91.666%',
	12: '100%',
}

const screenSizes = {
    xs: css`
    ${mediaQueries.xs} {
        flex-basis: ${props => columnSizes[props.xs]};
    }
    `,
    sm: css`
    ${mediaQueries.sm} {
        flex-basis: ${props => columnSizes[props.sm]}
    }
    `,
    md: css`
    ${mediaQueries.md} {
        flex-basis: ${props => columnSizes[props.md]}
    }
    `,
    lg: css`
    ${mediaQueries.lg} {
        flex-basis: ${props => columnSizes[props.lg]}
    }
    `,
    xl: css`
    ${mediaQueries.xl} {
        flex-basis: ${props => columnSizes[props.xl]}
    }
    `,
    xxl: css`
    ${mediaQueries.xxl} {
        flex-basis: ${props => columnSizes[props.xxl]}
    }
    `,

}

export const FlexColStyles = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    /* flex-basis: ${props => columnSizes[props.xs]}; */
    ${spacingSizes}
    ${props => props.xs && screenSizes.xs}
    ${props => props.sm && screenSizes.sm}
    ${props => props.md && screenSizes.md}
    ${props => props.lg && screenSizes.lg}
    ${props => props.xl && screenSizes.xl}
    ${props => props.xxl && screenSizes.xxl}

`

export const FlexRowStyles = styled.section`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    ${spacingSizes}
`