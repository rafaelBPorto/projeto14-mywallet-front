import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StyledForm from "../../../assets/styles/StyleForm";
import dayjs from "dayjs";
import axios from "axios";
import { BASEURL } from "../../../Constants/URLS";


export default function FormOutflow() {
    const [value, setValue] = useState("");
    const [descripton, setDescriprion] = useState("");

    const navigate = useNavigate();

    async function handleForm(e) {
        e.preventDefault();
        const token = localStorage.getItem("token");

        try {
            const res = await axios.post(`${BASEURL}/registries`, {
                value,
                description: descripton,
                type: "outflow",
                date: dayjs().format("DD/MM/YYYY")
            },{
                headers: {"authorization": `Bearer ${token}`}
            });
            navigate("/home")


        } catch (error) {
            console.log(error)
            alert("Não foi possível adicionar este lançamento")
        }

    }

    return (
        <StyledForm onSubmit={handleForm}>
            <input
                type="number"
                name="money"
                value={value}
                placeholder="Valor"
                onChange={(e) => setValue(e.target.value)}
                required
            />

            <input
                type="text"
                name="descripiton"
                value={descripton}
                placeholder="Descrição"
                onChange={(e) => setDescriprion(e.target.value)}
                required
            />

            <button type="submit">Salvar entrada</button>
        </StyledForm>
    )
}