import { BrowserRouter, Routes, Route } from "react-router-dom"
import Update from "./pages/Update";
import Add from "./pages/Add";
import Users from "./pages/Users";
import "./style.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<Users/>}/>
        <Route path ="/add" element = {<Add/>}/>
        <Route path ="/update/:id" element = {<Update/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
