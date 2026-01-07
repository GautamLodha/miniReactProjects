import React from 'react'
import { menuData } from './data'
import Presentation from './presentation'

const TreeView = () => {
  return (
    <div className='w-screen h-screen p-10' >
        {menuData.map((singleMenu,index)=><Presentation data={singleMenu} />)}
    </div>
  )
}

export default TreeView