import RegisterForm from './Components/RegisterForm';
//import Register from './Components/Register';
import Login from './Components/Login';
import {BrowserRouter,Routes,Route,} from "react-router-dom";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<RegisterForm/>} />
      <Route path="/Login" element={<Login/>} />

    </Routes>
  </BrowserRouter>
  
    
  
    </div>
  );
}

export default App;
