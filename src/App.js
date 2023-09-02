import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
;
import Home from './pages/Home/Home';
import Char from './pages/Character/Character';


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>

        <Route path='/pages/Character' element={<Char/>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
