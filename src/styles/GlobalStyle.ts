import { createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    font-family: 'Vollkorn SC', serif;
    box-sizing: border-box;
  }
  
`

export const colors = {
  white: "#fff",
  black: "rgba(0,0,0,0.4)"
}