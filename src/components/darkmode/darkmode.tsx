import React, { useEffect, useState } from 'react'

const DarkMode = () => {
    const [theme,setTheme] = useState<string>('light')
    function handleTheme(){
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    useEffect(()=>{
        localStorage.setItem('theme',theme)
    },[theme])
  return (
    <div className={`p-10 w-screen h-screen ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} `} >
        <div>
            <button onClick={handleTheme} className='p-2 bg-red-500 rounded-lg'  >switch</button>
        </div>
    </div>
  )
}

export default DarkMode