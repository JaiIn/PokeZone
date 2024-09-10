import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './container/main/Main';
import PokeInfoMain from "./container/infopage/PokeInfoMain";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path="/pokeInfo/:id" element={<PokeInfoMain/>}/>
      </Routes>
    </Router>
  );
}

export default App;
