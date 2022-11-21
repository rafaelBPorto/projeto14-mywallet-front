import { Link } from "react-router-dom";
import { StyleScreen } from "../../assets/styles/StyleScreen";
import SingUpForm from "./components/SingUpForm";

export default function SingUp (){
    return (
        <StyleScreen>
            <h1>MyWallet</h1>
            <SingUpForm/>
            <Link to={"/"}>Já tem uma conta? Entre agora!</Link>
        </StyleScreen>
    )
}