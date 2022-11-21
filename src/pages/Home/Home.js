import { StyleScreen } from "../../assets/styles/StyleScreen";
import Header from "./components/Hearder/Header";
import Registries from "./components/Registries/Registries";
import SubmitPost from "./components/SubmitPost/SubmitPost";

export default function Home(){
    return (
        <StyleScreen>
            <Header/>
            <Registries/>
            <SubmitPost/>
        </StyleScreen>
    )
}