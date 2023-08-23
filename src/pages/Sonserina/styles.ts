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

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 0.5rem;

        #co {
            font-size: 40px;
            font-weight: bolder;
        }

    }

    p {
        text-indent: 20px;
    }

    li {
        padding-left: 1.5rem;
    }

    a {
        display: flex;
        justify-content: flex-end;
        height: 2rem;
    }

    min-height: calc(100vh - 10rem);

    @media(max-width: 740px) {
        section {
            width: 90%;
        }

        div {
            justify-content: space-between;

            img {
                width: 10%;
            }
        }
    }

    @media(max-width: 660px) {
        section {
            font-size: 22px;
        }
    }
`