
import { useState } from 'react'
import { accordionData } from '../data/accordian'

const Accordian = () => {
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
    < div className = "w-screen h-screen p-20 " >
      
      { accordionData &&  accordionData.map((data)=>{
        return <div key={data.id}  className="p-2 mt-2 rounded-md bg-amber-300 " >
          <div className="flex flex-row items-center gap-5 " >
            <h1 className='text-3xl font-bold' >{data.id}  </h1>
            <button className='text-3xl font-bold ' onClick={()=>handleClick(data.id)} >+</button>
          </div>
          
          <h2>{data.title}</h2>
           <p> {ids.includes(data.id) ? data.content : null} </p>
        </div>
      })}
    </div>
  )
}

export default Accordian