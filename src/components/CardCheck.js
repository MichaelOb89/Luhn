import { useState, useEffect } from "react";

export default function CardCheck({luhn}){
    const [num, setNum] = useState('')
    const handleInput = (evt) => {
        setNum(evt.target.value)
    }
    useEffect(()=>{
        luhn(num)
    }, [num])
    return(
        <>
            <input type='text' onChange={handleInput} value={num} />  
        </>
    )
}