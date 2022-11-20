import styled from "styled-components";
import { colorButton } from "../../Constants/Colors";

const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
    gap: 10px;

    input{
        box-sizing:border-box;
        padding: 15px;
        width: 326px;
        height: 58px;
        border: unset;
        border-radius: 5px;
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 20px;

    }

    button{
        box-sizing:border-box;
        padding: 15px;
        width: 326px;
        height: 58px;
        border: unset;
        border-radius: 5px;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 20px;

        background: ${colorButton};
        color: #FFFFFF;

    }
`

export default StyledForm;