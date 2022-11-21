import Hearder from "../../components/Header";
import { StyleScreen } from "../../assets/styles/StyleScreen";
import FormInflow from "./components/FomrInFlow";

export default function Inflow() {
    return (
        <StyleScreen>
            <Hearder typeRegistrie={"Nova entrada"}/>
            <FormInflow/>
        </StyleScreen>

    )
}