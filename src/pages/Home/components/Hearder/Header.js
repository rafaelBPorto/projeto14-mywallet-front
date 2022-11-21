import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StyleHeader from "../../../../assets/styles/StyleHearder";
import { BASEURL } from "../../../../Constants/URLS";

export default function Header() {

    const [user, setUser] = useState();
    const navigate = useNavigate();
    
    function logout(){
        localStorage.clear();
        navigate("/")
    }
    useEffect(() => {
        async function getUser() {
            const token = localStorage.getItem("token");
            try {
                const res = await axios.get(`${BASEURL}/registries`,
                    {
                        headers: { "authorization": `Bearer ${token}` }
                    });
                setUser(res.data.user)
            } catch (error) {
                console.log(error)
            }
        }
        getUser();
    }, [])
    return (
        <StyleHeader>
            <h2>Olá, {user?.name}</h2>
            <button onClick={logout}><h2>Logout</h2></button>
        </StyleHeader>
    )
}