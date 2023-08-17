import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    font-family: 'Vollkorn SC', serif;
    font-size: 40;
    box-sizing: border-box;
  }
`

export const colors = {
  primary: "#3F8A9B",
  black: "#000",
  white: "#fff"
}