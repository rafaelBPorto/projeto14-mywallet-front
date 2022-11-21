import { Link } from "react-router-dom"
import StyleHeader from "../assets/styles/StyleHearder"


export default function Hearder({typeRegistrie}){
    return(
        <StyleHeader>
            <h2>{typeRegistrie}</h2>
            <Link to="/home"><h2>X</h2></Link>
        </StyleHeader>
    )

}
