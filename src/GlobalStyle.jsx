import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  overflow-x: hidden;

}
body {
  background-color: #EFEFEF;
  margin: 0;
  padding: 0;
  font-family: ArmenianDecorativeU-Italic;
  color: #1E1E1E;
}
* {
    box-sizing: border-box;
    letter-spacing: 1px;
  }
  @font-face {
    font-family: 'ArmAllegrou';
    src: url("/font/ArmAllegroU.woff2") format("woff2");
    font-display: swap;
  }
  @font-face {
    font-family: "ArmenianDecorativeU-Italic";
    src: url("/font/ArmenianDecorativeU-Italic.woff2") format("woff2");
    font-display: swap;
  }
  h3 {
    font-size: 24px;
  }
  h2 {
    font-size: 30px;
    font-weight: 100;
  }
  h1 {
    font-size: 45px;
    margin-bottom: 20px;
    font-family: ArmAllegrou;
    color: #fefefe;
    font-weight: 100;
  }
`;
const Container = styled.div`
  max-width: 390px;
  margin: 0 auto;
  padding: 16px;
`;
const Flexible = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { GlobalStyle, Container, Flexible };
