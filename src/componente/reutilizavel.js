import {useState,useEffect} from "react";

function useSetOpenClick(defaultValue){
    const [open,setOpen] = useState(defaultValue)
    useEffect(() => {
        window.onclick = () => setOpen(true)
    })
    return open;
}

export default useSetOpenClick