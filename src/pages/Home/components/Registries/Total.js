import styled from "styled-components";

export default function Total({registries}){
    
    const nums = registries.map((r)=> Number(r.value))
    const total = nums.reduce((total, nums) => total + nums, 0);

    return(
        <StyleTotal><span>Saldo</span><StyelSaldo  color={total>0?"#03AC00":"#C70000"}>{total}</StyelSaldo></StyleTotal>
    )
}
const StyleTotal = styled.div`
    box-sizing:border-box;
    display: flex;
    justify-content: space-between;
    width: 95%;
    max-width:326px;
    height: 30px;
    background:#ffffff;
    bottom: 0;
    left:0;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    color: black;
    padding: 10px;
`

const StyelSaldo = styled.span`
    color: ${props=> props.color}
`