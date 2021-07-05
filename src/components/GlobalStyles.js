import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }
    }
    body {
        font-family: "Montagna", sans-serif;
        width: 100%;
    }
    h2{
        font-size: 2.5rem;
        font-family: "Merriweather", cursive;
        font-weight: lighter;
    }
    h3 {
        font-size: 1.2rem;
        padding: 1rem 0rem;
    }
    p{
        font-size: 1rem;
        padding: 0rem 0rem 0.8rem 0rem;
        text-indent: 2rem;
    }
    img {
        display: block;
    }
`;

export default GlobalStyles;
