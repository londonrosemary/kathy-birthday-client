import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './App.css';
import Dashboard from './components/Dashboard';
import NewMsg from "./components/NewMsg";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/new' element={<NewMsg/>} />
        <Route exact path='/' element={<Dashboard/>} />
      </Routes>
      
    </Router>    
  );
}

export default App;
