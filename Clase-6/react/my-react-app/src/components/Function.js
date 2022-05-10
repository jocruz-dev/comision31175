import { useEffect } from "react"

const Function = ({items, name, children}) => {

    const getAPI = (url)=>{
        return fetch(url)
    }

    useEffect((
        getAPI('https://pokeapi.co/api/v2/pokemon/mew').then((res)=> console.log(res))
    ),[])

    return(
        <div>
            <h1>{name} Componente de funcion </h1>
            {items.map((item)=>{
                return <p>{item}</p>
            })}
        </div>
    )
}

export default Function

