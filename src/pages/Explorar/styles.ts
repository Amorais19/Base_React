import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle"

export const Section=styled.section`
    color: ${colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
    
    section {
        background-color: ${colors.black};
        width: 70%;
        padding: 1rem;
        text-align: justify;
        font-size: 25px;
    };

    p {
        text-indent: 20px;
    }

    div {
        text-align: center;

        a {
                text-decoration: none;
                color: ${colors.white};
                font-size: 40px;
                font-weight: bold;
                padding: 3rem;
        }
    }

    #co {
        padding-top: 2rem;
    }

    #lo {
        padding: 1.5rem;
    }

    min-height: calc(100vh - 10rem);
`