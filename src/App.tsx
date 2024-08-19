import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './container/main/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </Router>
  );
}

export default App;
