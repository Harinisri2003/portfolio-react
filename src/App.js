
import './App.css';
import Topbar from './components/topbar/Topbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from './pages/homepage/Homepage';
import About from './components/about/About';

import Project from './pages/project/Project';
import Footer from './components/footer/Footer';
import Skill from './pages/skill/Skill';
import Cont from './pages/cont/Cont';
import Aboutme from './pages/aboutme/Aboutme';




function App() {
  // const location=useLocation();
  return (
    <Router>
    <Topbar />
    <Routes>
      <Route path="/" element={<Homepage></Homepage>}></Route>  
      <Route path="/aboutme" element={<Aboutme></Aboutme>}></Route>
      <Route path='/skill' element={<Skill></Skill>}></Route>
      <Route path='/cont' element={<Cont/>}></Route>
      <Route path='/project' element={<Project></Project>}></Route>
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
