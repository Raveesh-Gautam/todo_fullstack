import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";


function App() {
  return (
    <div className="App">
     
      <Router>
      <Navbar/>
      <Routes>
        <Route  exact path="/" element={<Home/>}/>
        <Route  exact path="/addUser" element={<AddUser/>}/>
        <Route  exact path="/edituser/:id" element={<EditUser/>}/>
       



      </Routes>
      
      </Router>
    
    
    </div>
  );
}

export default App;
