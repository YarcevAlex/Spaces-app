import {Route, Routes, useLocation} from 'react-router-dom'

//Components
import NavbarComponent from "./Components/Navbar";
import HomeComponent from "./Components/Home";
import DestinationComponent from "./Components/Destination";
import CrewComponent from "./Components/Crew";
import TechComponent from "./Components/Technology";

//JSON
import dataJson from './data.json';

//style
import './App.scss';


function App() {

  const location = useLocation().pathname;
  const newClass = location.split("/")[1];

  return (
    <div className={"main " + newClass}>
      <NavbarComponent currentRoute={newClass}/>
      <Routes>
        <Route path="/" element={<HomeComponent/>}/>
        <Route path="/destination" element={<DestinationComponent data={dataJson}/>}/>
        <Route path="/crew" element={<CrewComponent data={dataJson}/>}/>
        <Route path="/technology" element={<TechComponent data={dataJson}/>}/>

      </Routes>
    </div>
  )
    ;
}

export default App;
