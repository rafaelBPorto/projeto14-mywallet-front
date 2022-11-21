import styled from "styled-components";
import { backgroundColor } from "../../Constants/Colors";

export const StyleScreen = styled.div`
    box-sizing: border-box;
    padding: 24px 24px 20px 24px;
    /* gap: 25px; */
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    



    background-color: ${backgroundColor};
    color: #FFFFFF;

    h1{
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
    }

    h2{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
    font-size: 26px;
    }


    a{
        margin-top: 25px;
        text-align:center;
        text-decoration:none;
        font-family: 'Raleway';
        font-weight: 700;
        color:#FFFFFF;
    }
`