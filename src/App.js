import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About/About'
import Home from './Components/Pages/Home/Home';
import Header from './Components/Shared/Header/Header';
import Login from './Components/Pages/Login/Login/Login'
import Signup from '././Components/Pages/Login/Signup/Signup'
import Blogs from './Components/Pages/Blogs/Blogs';
import NotFound from './Components/Shared/NotFound/NotFound';
import CourseDetails from './Components/Pages/CourseDetails/CourseDetails';
import CheckOut from './Components/CheckOut/CheckOut';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Footer from './Components/Shared/Footer/Footer';


function App() {
 
  return (
    <div className="App">
      <Header></Header>

     <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path='/course/:courseId' element={<CourseDetails></CourseDetails>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/checkout" element={ <RequireAuth>
                                            <CheckOut></CheckOut>
                                          </RequireAuth>
                                        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
