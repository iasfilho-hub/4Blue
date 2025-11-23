import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }

    body {
        display: flex;        
        justify-content: center;
        align-items: center;
        margin-top: 50px;     
        background-color: #fff; 
        color: white;       
    }

   
    

`
