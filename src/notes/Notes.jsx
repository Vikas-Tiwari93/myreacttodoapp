

import { Link, Route, Routes } from "react-router-dom";
import Form from "./form";


export default function Notes() {
  return (
   <>

  
   <section id="mainbody">
        <div id="nav">
          <div  className="navitem"  id="listsearch">
            <img src="./img/search.png" alt="" width="20px" />
            <input type="text"  />
          </div>
          <div className="navitem"></div>
          <div className="navitem">Change account <img src="" alt="" /></div>
        </div>
        <div id="contents">
          <div id="contentoptions">
            <div id="add">
              <button onClick="newnote()">
                <img src="./img/add.png" alt="" width="30px" />
              </button>
              <Link to="./form"> <span>Add a note</span></Link>
              
            </div>
            <div id="add">
              <button onClick="deletenote()">
                <img
                  src="./img/1214428.png"
                  alt=""
                  width="30px"
                /></button
              ><span>Delete all</span>
            </div>
            <div id="add">
              <button onClick="sharenote()">
                <img src="./img/share.png" alt="" width="30px" /></button
              ><span>share</span>
            </div>
          </div>

          <div id="view"></div>
          {/* <!-- new form for submission --> */}
<Routes>
  
  <Route path="form"element={<Form/>}></Route>
</Routes>
          
        </div>
      </section>

   </>
  )
}

