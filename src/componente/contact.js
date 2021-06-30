import React,{useState, useEffect} from 'react';

const Contact = React.memo(function Contact(){   
    const [Box, setBox] = useState({
        width: '200px',
        height: '300px',
        display: 'none',
        background: '#fff',
        transition: '2s ease-in'
    })
    const [style, setStyle] = useState({
        width: '200px',
        height: '300px',
        background: '#ccc',
        marginLeft: '0',
        transition: 'All ease 2s'
    })
    useEffect(() => {
        setTimeout(
            setStyle(prevState => {
            return{...prevState, marginLeft: '700px'}
        },2000))
        setTimeout(() => {
            setStyle(prevState => {
                return{...prevState, height: '200px'}
            })
        },3000)
    })
        return(
            <body>
            <div style={style}></div> 
            <div style={Box}></div>       
            <button onClick={() => setTimeout(() => setBox(prevState => {
                return{...prevState, display: 'block',background: '#000'}
            })),1000}>Clicar</button>
            <input type="text" id="inp"/>   
            </body>
        )
}
)
export default Contact;