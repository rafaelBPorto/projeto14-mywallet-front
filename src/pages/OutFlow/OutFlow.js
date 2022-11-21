import { StyleScreen } from "../../assets/styles/StyleScreen";
import FormOutflow from "./Components/FormOutFlow";
import Hearder from "../../components/Header";

export default function OutFlow() {
    return (
        <StyleScreen>
            <Hearder typeRegistrie={"Nova saída"}/>
            <FormOutflow />
        </StyleScreen>

    )
}