import StyleRegistries from "./StyleRegistries.js";
import axios from "axios";
import { BASEURL } from "../../../../Constants/URLS"
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import Total from "./Total.js";

export default function Registries() {
    const [registries, setRegistries] = useState();

    useEffect(() => {
        async function getRegistries() {
            const token = localStorage.getItem("token");
            try {
                const res = await axios.get(`${BASEURL}/registries`,
                    {
                        headers: { "authorization": `Bearer ${token}` }
                    });
                setRegistries(res.data.registries)
            } catch (error) {
                console.log(error)
            }
        }
        getRegistries();
    }, [])

    if (registries === undefined) {
        return <StyleRegistries><h2>Não há registros de entrada ou saída</h2></StyleRegistries>
    }

    return (
        <>
        <StyleRegistries>
            {registries.map((r, index) =>
                <Extract key={index}>
                    <span> <StyleDate>{r.date}</StyleDate> {r.description} </span>
                    <StyleType type={r.type==="outflow"? "#C70000" : "#03AC00"}>R$ {Math.abs(r.value)}</StyleType>
                </Extract>
            )
        }
        </StyleRegistries >
        <Total registries={registries}/>
        </>
    )
}

const Extract = styled.div`
    display: flex;
    justify-content: space-between;

    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin-top:5px;
    p{
        
    flex-direction:column;
    }
`
const StyleDate = styled.span`
    color:#C6C6C6;
    margin-right: 10px;
`
const StyleType = styled.span`
    color: ${props => props.type}
`