
import { useState } from "react";
import Inputs from "./inputs";


export default function Propfn({input}) {
  const[data,setdata]=useState()
    let sum=0;
    function addfn(data){ sum=sum+Number(data);}
   


  return (
    Array.from({length:input},()=>{
        
         return <><Inputs add={addfn} name="" city={null|| 'na'} />
         <Inputs add={addfn} city={null|| 'na'} /></>
    } )
  )
}
