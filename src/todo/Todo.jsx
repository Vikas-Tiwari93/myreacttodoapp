import { Link } from "react-router-dom"


export default function Todo() {
  return (
    <>

  
    <section id="mainbody">
         <div id="nav">
           <div  className="navitem"  id="listsearch">
             <img src="./img/search.png" alt="" width="20px" />
             <input type="text" placeholder="search Todo"  />
           </div>
           <div className="navitem"> Todo-List</div>
           <div className="navitem">Change account <img src="" alt="" /></div>
         </div>
         <div id="contents">
           <div id="contentoptions">
             <div id="add">
               <button onClick="newnote()">
                 <img src="./img/add.png" alt="" width="30px" />
               </button>
               <Link to="./form"> <span>Add a Todo</span></Link>
               
             </div>
            
           </div>
 
           <div id="view"></div>
           {/* <!-- new form for submission --> */}
 
           
         </div>
       </section>
 
    </>
  )
}
