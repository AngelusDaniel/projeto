import {createGlobalStyle} from "styled-components"



export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }
    :root {
        --main: #6c757d;
        --main-hover: #5a6268;
        --white: #ffffff
    }
    .container {
        display: flattenDiagnosticMessageText;
        align-items: center;
        widht: 100%;
        margin: 0 auto;

        @media (max-width: 992px){
            max-width: 960px;
        }
        @media (max-width: 768px){
            max-width: 720px;
        }
        @media (max-width: 576px){
            width: 100%;
        }

    }
`