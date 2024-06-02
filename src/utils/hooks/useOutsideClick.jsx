import { useEffect, useRef } from "react"

const useOutsideClick=(handleToggle)=>{
    const ref=useRef()
    useEffect(()=>{
    function handleClick(e){
     if(ref.current && !ref.current.contains(e.target))
        {
            handleToggle()
        }
    }
    window.addEventListener("click",handleClick)
    return ()=>{
        window.removeEventListener("click",handleClick)
    }
    },[ref])
    return ref;
}

export default useOutsideClick;