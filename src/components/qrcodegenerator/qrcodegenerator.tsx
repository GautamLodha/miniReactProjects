import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QrCodeGenerator = () => {
    const [input,setInput] = useState<string>("")
    const [qrcode,setQrcode] = useState<string>("")
    function generate(){
        setQrcode(input)
        setInput('')
    }
  return (
    <div className='w-screen h-screen p-10' >
        <input className='mb-2 border-opacity-100' onChange={(e)=>setInput(e.target.value)} type='text' name='' value={input} placeholder='type here' />
        <div>
            <QRCode id='qr-code-value' value={qrcode} />
        </div>
        <button onClick={generate} className='p-3 mt-3 text-white bg-black rounded-md' disabled={!input || input.trim() === ''} >Generate</button>
    </div>
  )
}

export default QrCodeGenerator