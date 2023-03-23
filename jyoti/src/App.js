import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home"

function App() {
  return (
    <div> 
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
           {/* <Route path='/AllURL' element={<AllURL />}></Route>
         <Route path='/Login' element={<LogIn />}></Route>
          <Route path='/Signup' element={<SignUp />}></Route>  */}
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
