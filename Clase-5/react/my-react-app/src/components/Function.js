import { useState, useEffect } from "react"

const Function = ({name, children}) => {

    const [state, setState] = useState(0)
    const [stateTest, setStateTest] = useState(0)


    const handleClick = ()=>{
        setState(state + 1)
    }

    const handleClickTest = ()=>{
        setStateTest(stateTest + 1)
    }

    useEffect(()=>{
        console.log(new Date().toString())
    },[state])


    return(
        <div>
            <h1>Componente de funcion {state}</h1>
            <h2>Segundo estado {stateTest}</h2>

            {children}
            <button onClick={handleClick}>CLICK</button>
            <button onClick={handleClickTest}>CLICK2</button>
        </div>
    )
}

export default Function

