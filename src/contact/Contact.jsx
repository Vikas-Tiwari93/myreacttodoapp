import { Link } from "react-router-dom"

export default function Contact() {
  return (
    <>

  
    <section id="mainbody">
         <div id="nav">
         <div  className="navitem"  id="listsearch">
            <img src="./img/search.png" alt="" width="20px" />
            <input type="text" placeholder="search contact"  />
          </div>
            <div className="navitem">contact list</div>
           <div className="navitem">Change account <img src="" alt="" /></div>
         </div>
         <div id="contents">
           <div id="contentoptions">
             <div id="add">
               <button onClick="newnote()">
                 <img src="./img/add.png" alt="" width="30px" />
               </button>
               <Link to="./form"> <span>Add a Contact</span></Link>
               
             </div>
            
           </div>
 
           <div id="view"></div>
           {/* <!-- new form for submission --> */}
 
           
         </div>
       </section>
 
    </>
  )
}
// respect is also a basic social contract.and not a emotion. so only thing u need to know is why contacract was breeched
// if breeched,a false perception of how others see u. which closes you
// 
