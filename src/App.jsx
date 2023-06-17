

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './sidebar'
import Notes from './notes/Notes'
import Event from './events/Event'
import Todo from "./todo/Todo"
import Contact from './contact/Contact'
import Profile from './profile/Profile'
import Settings from './settings/Settings'


function App() {


  return (
 <>
 <section>
 <BrowserRouter>
<Sidebar/>
<Routes>
  <Route path="/*" element={<Notes/>} />
  <Route path="/todo" element={<Todo/>} />
  <Route path="/events" element={<Event/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/profile" element={<Profile/>} />
  <Route path="/settings" element={<Settings/>} />
</Routes>
</BrowserRouter>
 </section>


 </>
  )
}

export default App
