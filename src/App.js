import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';
import Header from './Components/Shared/Header/Header';
import Login from './Components/Pages/Login/Login/Login'
import Signup from '././Components/Pages/Login/Signup/Signup'


function App() {
 
  return (
    <div className="App">
      <Header></Header>

     <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        {/* <Route path='/course/:courseId' element={<ServiceDetail></ServiceDetail>}></Route> */}
        {/* <Route path="/about" element={<About></About>}></Route> */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Signup></Signup>}></Route>
        {/* <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route> */}
      </Routes>
      
    </div>
  );
}

export default App;
