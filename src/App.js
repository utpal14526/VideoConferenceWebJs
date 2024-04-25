import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Roompage from './Components/Roompage'

function App() {
  return (
   <>
   <Routes>

    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/room/:roomID" element={<Roompage/>}/>
   </Routes>

   </>
  );
}

export default App;
