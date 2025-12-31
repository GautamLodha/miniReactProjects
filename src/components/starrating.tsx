// import {FaStar} from 'react-icons/fa'

import { useState } from "react";
import { FaStar } from "react-icons/fa"

const StarRating = () => {
    // let arr = [1,2,3,4,5,6];
    const [hoverId,setHoverId] = useState<number|null>(null);
    const [fixId,SetFixId] = useState<number|null>(null);
    let arr:any = [1,2,3,4,5,6];
  return (
    <div className="w-screen h-screen p-20 " >
        <div className="flex " >
            {arr.map((_:number,id:number)=><FaStar style={{color :( fixId!==null && id<=fixId || hoverId!==null  &&  id<=hoverId) ? "red" : "black"}} onMouseEnter={()=>{
                // console.log(id)
                setHoverId(id);
            }} onMouseLeave={()=>{
                // console.log(id)
                setHoverId(null)
            }}
            onClick={()=>{
                console.log(id)
                if(fixId === id){
                    SetFixId(null)
                }else{
                    SetFixId(id)
                }
            }}
                 key={id} />)}
        </div>
        
    </div>
  )
}

export default StarRating