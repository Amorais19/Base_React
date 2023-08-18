import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle"

export const Section=styled.section`
    color: ${colors.white};
    display: flex;
    height: calc(100vh - 7rem);
    font-size: 24px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 10rem;

    nav {
        background-color: ${colors.black};
        padding: 0.2rem;
        a {
            color: ${colors.white};
            text-decoration: none;
            padding: 1rem;
        }

    }
`