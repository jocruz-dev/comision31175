import { useEffect } from "react"
const Function = ({items, name}) => {

    const getAPI = (url)=>{
        return fetch(url)
    }

    useEffect(()=>{
        getAPI('https://pokeapi.co/api/v2/pokemon/ampharos')
        .then((response)=> response.json())
        .then((res)=> console.log(res))
    },[])

    return(
        <div>
            <h1>{name} Componente de funcion </h1>
            {items.map((item, index)=>{
                return <p key={index}>{item}</p>
            })}
        </div>
    )
}

export default Function

