import React from 'react'
import { useState } from 'react'
import Datafetch from '../Datafetch'

const Inputbox = () => {
    const [input, setInput] = useState('')
    const inputHandle=(event)=>{
         setTimeout(()=>{
          setInput(event.target.value)
                  },2000)      
           }
   
    return (
        <>
              <div className="bg-blue-500 h-screen italic" >
        {input? <p className="text-5xl ">{input.toUpperCase()}</p> : <h1 className="text-5xl mr-20 ">WORD HUNT</h1>}
                  <div className="container mt-10  flex justify-center  ">
                 <input type="text" onChange={inputHandle} className="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none mr-8 ml-10" placeholder="Search anything..."/>      
                 </div>
             {input &&      <Datafetch  input={input} />}
             </div>
      </> 
    )
}

export default Inputbox
