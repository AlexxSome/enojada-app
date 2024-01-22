import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Response from "./components/response/Response";

function App() {

  return (
    <div className="App">
        <h1>Welcome to Enojada-App</h1>
        <Home />
         <Routes>
             <Route path='/enojada-app/response' element={<Response />} />
             />
         </Routes>
    </div>
  );
}

export default App;
