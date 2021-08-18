import React from 'react'
const Audio = (props) => {
    return (
   <>
   <div className="mx-80 justify-center flex mt-10"> 
    <h4 className="mr-10">Phonetics: {props.phonetics}</h4>
   <audio controls>
        <source src={props.value} />
      </audio>
      </div>
   </>
    )
}

export default Audio
