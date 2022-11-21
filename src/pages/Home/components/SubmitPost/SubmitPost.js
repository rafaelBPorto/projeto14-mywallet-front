import { Link } from "react-router-dom";
import StyleSubmitPost from "./StyleSubmitPost";

export default function SubmitPost() {
    return (
        <StyleSubmitPost>
            <Link to={"/inflow"}>Nova<br/>entrada</Link>
            <Link to={"/outflow"}>Nova<br/>saída</Link>
        </StyleSubmitPost>
    )
}