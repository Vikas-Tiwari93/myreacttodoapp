import { useState } from "react"


export default function Inputs({add, name}) {
  
    const[value,setvalue]=useState()
    add(value)
   
    function setfn(e){
   setvalue(e.target.value)
    }
    console.log(name)
  return (<>
  
  <label htmlFor="">{name}</label>
  <input type="text" value={value} onChange={setfn}  />
  </>
    

  )
}
