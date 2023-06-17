
import { useState } from "react";
import Propfn from "./propfn";
import Counter from "./counter";
import Counter2 from "./nostale"
import Setcolorparent from "./setcolor";
import ProductView from "./laststate&form/laststae";


export default function Settings() {
  const[sum,setsum]=useState(0)

 
function sumfn(e){
setsum(e.target.value)
console.log(e.target.value)
}


 
 
  return (
    <section id="mainbody"> 
    {/* <Propfn input={4} sum={sumfn}/>
    <div>{sum}</div>
    <button onClick={sumfn} >zdfaz</button>
 

    <Counter2/> */}
    {/* <Setcolorparent/> */}
    <ProductView/>
    </section>
  )
}
