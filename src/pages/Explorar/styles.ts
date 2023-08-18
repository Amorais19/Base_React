import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle"

export const Section=styled.section`
    color: ${colors.white};
    background-color: ${colors.black};
    p {
        font-size: 20px;
        text-align: justify;
    }

    min-height: calc(100vh - 10rem);
`