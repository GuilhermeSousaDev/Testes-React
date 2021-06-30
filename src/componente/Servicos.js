import React,{ useState,useRef } from 'react';

function Servicos(){
    const [res,setRes] = useState('')
    const inp1 = useRef()
    const inp2 = useRef()
    const handleMetodo = () => {
        const val1 = parseFloat(inp1.current.value)
        const val2 = parseFloat(inp2.current.value) 
        setRes(val1 * val2)
    }
    return(
    <div>
       
        <button >Valor</button>
        <input type="text" ref={inp1}/>
        <input type="text" ref={inp2}/>
        <button onClick={handleMetodo}>Calcular</button>
        <p>{res}</p>
    </div>
    )
}

export default Servicos