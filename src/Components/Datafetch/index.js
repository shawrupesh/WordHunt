import React from 'react'
import { useState ,useEffect} from 'react'
import Audio from '../Audio/Audio'

const Datafetch = ({input}) => {
const[result,setResult]=useState([])
const[status,setStatus]=useState(true)

useEffect(() => {
   fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`).then((response)=>{ 
       if(response.status===404){
         setStatus(false)   }
       else{setStatus(true)}    
   return response.json()}).then((data)=>{
          setResult(data)  
                     
    })
}, [input])

    return<>
    {result.length && <Audio value={result[0].phonetics[0].audio} phonetics={result[0].phonetics[0].text}/>}
    <div className=" flex animate-pulse   space-x-20 ml-40">
     { result.length ? result[0].meanings.map((items,index)=>{
         const{definition,example,}=items.definitions[0]
  
         return(  
         <div   key={index}  className="  rounded-lg border-gery-500 border-8 mt-4 bg-white  w-1/4 text-2xl "> 
                <h4> {index+1}.{definition } </h4>
               {example && <h4 className="text-red-900" >For Example:{example}</h4> }  
               
         </div> 
                
               )      
     }) :''}
        
      <div className="  text-black-900  text-2xl  mt-10 "> 
          { status ? '' : <h4 className="animate-pulse px-80">PLEASE ENTER A VALID WORD</h4>}  
     </div>  
     </div> 
    </>
}

export default Datafetch
