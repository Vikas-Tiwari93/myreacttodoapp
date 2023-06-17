
import { useNavigate } from "react-router-dom"
export default function Form() {
    let  history= useNavigate()
    let submitfn=(e)=>{e.preventDefault()}
  return (
 
    <>
    <div id="form" className="form" onSubmit={submitfn}>
            <form id="input" action="">
              <input type="text" name="title" className="title" />
              <textarea type="text" name="body" className="body"></textarea>
              <div id="inputbtns">
                <button>Add</button>
                <button>
                  <img src="./img/settings.png" alt="" width="20px" />
                </button>
              </div>
              <button id="close" onClick={()=>history(-1)}>X</button>
            </form>
          </div>
    </>
  )
}
