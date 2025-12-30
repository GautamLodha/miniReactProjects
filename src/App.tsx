import { useState } from "react"
import { accordionData } from "./data/accordian"


function App() {
  
  // const [id,setId] = useState<number|null>(null)
  const [ids,setIds] = useState<number[]>([])
  
  function handleClick(currId : number){
    console.log(currId)
    if(ids.includes(currId)){
      setIds((prevIds)=>prevIds.filter((i)=> i!== currId))
    }else{
      setIds([...ids,currId])
    }
    
    
  }

  return (
    <>
      {accordionData &&  accordionData.map((data)=>{
        return <div key={data.id}  className="mt-2 bg-red-500 " >
          <div className="flex flex-row gap-5 " >
            <h1 >{data.id}  </h1>
            <button onClick={()=>handleClick(data.id)} >+</button>
          </div>
          
          <h2>{data.title}</h2>
           <p> {ids.includes(data.id) ? data.content : null} </p>
        </div>
      })}
    </>
  )
}

export default App
