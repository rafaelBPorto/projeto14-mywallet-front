import styled from "styled-components";
import { colorButton } from "../../../../Constants/Colors";


const StyleSubmitPost = styled.div`
    box-sizing: border-box;
    width: 95%;
    max-width:326px;
    display:flex;
    justify-content:space-between;

    a{
        display:flex;
        justify-content:center;
        align-items:center;
        background: ${colorButton};
        width:50%;
        height: 80vh;
        max-width:156px;
        max-height:114px;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        color:#FFFFFF;
    }
    `
export default StyleSubmitPost;