import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StyledForm from "../../../assets/styles/StyleForm";
import { BASEURL } from "../../../Constants/URLS";

export default function SingInForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
            const res = await axios.post(`${BASEURL}/auth/login`, { email, password });
            localStorage.setItem("token", res.data.token);
            navigate("/home")


        } catch (error) {
            alert("Senha e/ou usuário incorreto")
        }
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                value={email}
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <input
                type="password"
                name="password"
                value={password}
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <button type="submit">Entrar</button>

            <Link to={"/sing-up"}> Não possuí uma conta? Cadastre-se</Link>
        </StyledForm>
    )
}