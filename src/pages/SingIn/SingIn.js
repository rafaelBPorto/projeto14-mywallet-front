import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StyleScreen } from "../../assets/styles/StyleScreen";
import SingInForm from "./components/SingInForm";

export default function SingIn(){
    const navigate = useNavigate()

    useEffect(()=>{
        if(localStorage?.getItem("token")){
            navigate("/home")
        }
    },[navigate])



    return(
        <StyleScreen>
            <h1>MyWallet</h1>
            <SingInForm />
        </StyleScreen>
    )
}