import { createGlobalStyle } from "styled-components";

export const EstilosGlobais = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: #222831;
        font-family: "Roboto", sans-serif;
        width: 100%;
        height: 100vh;
    }
`