import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import User from './pages/User';
import Admin from './pages/Admin';
import Final from  './pages/Final';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Adminpageone from './pages/Adminpageone';
import Deletebuses from './pages/Deletebuses';
import Addbuses from './pages/Addbuses';
import Viewtickets from './pages/Viewtickets';
import Adddriver from './pages/Adddriver'

function App() {
  return (
    <>
      <Router>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/Admin" element={<Admin/>} />
          <Route path="/Adminpageone" element={<Adminpageone/>} />
          <Route path="/Viewtickets" element={<Viewtickets/>} />
          <Route path="/Addbuses" element={<Addbuses/>} />
          <Route path="/Deletebuses" element={<Deletebuses/>} />
          <Route path="/Final" element={<Final/>} />
          <Route path="/Adddriver" element={<Adddriver/>} />
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
