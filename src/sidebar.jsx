
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside id="sidebar">
    <div id="sideupper">
      <Link to="/" className='navanchor'><div className="options">
        <img src="./img/notes.png" width="28px" alt="" /> Notes
      </div></Link>
      <Link to="/todo" className='navanchor'>
      <div className="options">
        <img src="./img/todo.png" width="30px" alt="" /> To-Do list
      </div>
      </Link>
      <Link to="/events" className='navanchor'>
      <div className="options">
        <img src="./img/events.png" width="30px" alt="" /> Events
      </div>
      </Link>
      <Link to="/contact" className='navanchor'>
      <div className="options" >
        <img src="./img/contact.png" width="30px" alt="" /> Contact
      </div>
      </Link>
      
    </div>
    <div id="sidelower">
    <Link to="/profile" className='navanchor'>  <div className="options">
        <img src="./img/profile.png" width="30px" alt="" /> Profile
      </div></Link>
      <Link to="/settings" className='navanchor'>
      <div className="options">
        <img src="./img/settings.png" width="30px" alt="" /> Settings
      </div>
      </Link>
      
    </div>
  </aside>
   
  )
}

export default Sidebar