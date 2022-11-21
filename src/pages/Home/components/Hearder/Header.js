import axios from "axios";
import { useEffect, useState } from "react";
import StyleHeader from "../../../../assets/styles/StyleHearder";
import { BASEURL } from "../../../../Constants/URLS";

export default function Header() {

    const [user, setUser] = useState();

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
            <h2>Logout</h2>
        </StyleHeader>
    )
}