import { useState } from 'react'
import Childcolor from './childcolor'

export default function Setcolorparent() {
    const[color,setcolor]=useState('black')
  return (
    <>
    <div style={{color:color, fontSize:"28px"}}>i am text</div>
    <Childcolor color={color}/>
    <button onClick={()=>{setcolor('red')}}>red</button>
    <button onClick={()=>{setcolor('green')}}>green</button>
    <button onClick={()=>{setcolor('blue')}}>blue</button></>
    
  )
}
