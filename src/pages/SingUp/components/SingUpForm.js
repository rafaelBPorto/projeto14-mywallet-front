import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StyledForm from "../../../assets/styles/StyleForm";
import { BASEURL } from "../../../Constants/URLS";

export default function SingUpForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();

        if (password != confirmPassword) {
            return alert("Senhas não conferem")
        }

        try {
            const res = await axios.post(`${BASEURL}/auth/sing-up`, 
            {
                name,
                email,
                password
            })
            alert("Cadastro realizado!")
            navigate("/")
        } catch (error) {
            console.log(error)
            alert("Cadastro não realizado, tente novamente")
        }
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={name}
                placeholder="Nome"
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="email"
                name="email"
                value={email}
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                name="password"
                value={password}
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
            />

            <input
                type={"password"}
                name={"confirmPassword"}
                value={confirmPassword}
                placeholder="Confirme a senha"
                onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button>Cadastrar</button>

        </StyledForm>
    )
}