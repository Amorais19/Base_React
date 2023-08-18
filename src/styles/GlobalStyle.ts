import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    font-family: 'Vollkorn SC', serif;
    box-sizing: border-box;
  }
  
body {
    overflow-y: hidden;
}

`

export const colors = {
  white: "#fff",
  black: "rgba(0,0,0,0.4)"
}