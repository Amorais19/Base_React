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
    }

    #co {
        text-indent: 20px;
    }

    div {
        display: grid;
        grid-template-columns: auto auto;
        text-align: center;
        padding-bottom: 1.5rem;
        
        p {
            padding-top: 2rem;
        }

        a {
            text-decoration: none;
            color: ${colors.white};
            font-size: 40px;
            font-weight: bold;
        }

    }

    min-height: calc(100vh - 10rem);

    @media(max-width: 770px) {
        section {
            font-size: 22px;
            width: 90%;
        }

        div {
            grid-template-columns: auto;
        }

        a {
            font-size: 37px;
        }
    }
`