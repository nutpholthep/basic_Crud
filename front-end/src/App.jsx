import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Studen from "./Studen"
import CreateStudent from "./CreateStudent"
import UpdateStudent from "./UpdateStudent"
function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Studen/>}></Route>
        <Route path="/create" element={<CreateStudent/>}></Route>
        <Route path="/update/:id" element={<UpdateStudent/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
