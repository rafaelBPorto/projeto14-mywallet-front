import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StyledForm from "../../../assets/styles/StyleForm";
import dayjs from "dayjs";

export default function FormInflow() {
    const [value, setValue] = useState();
    const [descripiton, setDescriprion] = useState();

    const navigate = useNavigate();

    async function handleForm(e) {
        e.preventDefault();
        try {
            const res = await axios.post(`${BASEURL}/postings`, "token", {
                
            });
            navigate("/inflow")


        } catch (error) {
            alert("Não foi possível adicionar esta entrada")
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
                value={descripiton}
                placeholder="Descrição"
                onChange={(e) => setDescriprion(e.target.value)}
                required
            />

            <button type="submit">Salvar entrada</button>
        </StyledForm>
    )
}