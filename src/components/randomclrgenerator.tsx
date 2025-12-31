import  { useState } from 'react'

const RandomColorGenerator = () => {
    const [hex,setHex] = useState<string>('#123456')
    const [rgb,setRgb] = useState<string>('rgb(130,90,67')
    function generateHex(){
        let hexColor = "#";
        for(let i=0;i<6;i++){
          let curr = Math.floor(Math.random() * 9);
          hexColor += curr.toString();
        }
        setHex(hexColor)
        setRgb("")
    }
    function generateRgb(){
      let r = Math.floor(Math.random()*256);
      let g = Math.floor(Math.random()*256);
      let b = Math.floor(Math.random()*256);
      
      setRgb(`rgb(${r},${g},${b})`)
      setHex("")
    }
  return (
    <div style={{backgroundColor : (rgb.length > 0 ? rgb : hex)  }} className ={` h-screen w-screen p-20 `} >
      hello
      <button className='p-2 ml-2 text-white bg-black rounded-md ' onClick={generateRgb} >GenerateRandomRGB</button>
      <button className='p-2 ml-2 text-white bg-black rounded-md ' onClick={generateHex} >GenerateRandomHEX</button>
    </div>
  )
}

export default RandomColorGenerator