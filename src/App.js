import './App.css';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';
//import { BrowserRouter as Router,Switch,Route,Redirect } from 'react-router-dom' V5;
import { BrowserRouter as Router,Routes, Route,Navigate} from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <NavBar/>
        <div className="content-container">
        <Routes>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/not-found" element={<NotFound/>}/>
          <Route path="/" exact element={<Home/>}/>
            {/* Redirect all unknown routes to NotFound */}
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
        </div>
      </Router>
     
    </div>
  );
}
export default App;
