import './App.css';
 import {BrowserRouter as Router,Route,Link, Routes} from "react-router-dom";
 import LoginPage from "./components/authentication/loginPage";
 import SignupPage from "./components/authentication/signupPage";
 import AdminPage from './components/authentication/admin';
 import AboutPage from './components/aboutusPage';
 import ContactPage from './components/contactPage';
 import ContestPage from './components/contestPage';
import HomePage from "./components/homePage";
function App() {
  return ([
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/signup" element={<SignupPage/>}></Route>
        <Route path="/admin" element={<AdminPage/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
        <Route path="/AboutUs" element={<AboutPage/>}></Route>
        <Route path="/contestPage" element={<ContestPage/>}></Route>
      </Routes>
     </Router>
    </div>
  ]
  );
}

export default App;
