import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle"

export const Section=styled.section`
    color: ${colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    section {
        background-color: ${colors.black};
        width: 70%;
        padding: 1rem;
        text-align: justify;
        font-size: 25px;
        
    }

    #so {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 0.5rem;
    }

    #co {
            font-size: 40px;
            font-weight: bolder;
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

    #ce {
        font-size: 40px;
        font-weight: bolder;
        text-align: center;
        padding-top: 1rem;
    }

    #ca {
        display: grid;
        grid-template-columns: auto auto auto;
        justify-content: space-between;
        padding-top: 2rem;

        #pi {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    min-height: calc(100vh - 10rem);

    @media(max-width: 740px) {
        section {
            width: 90%;
        }

        #so {
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