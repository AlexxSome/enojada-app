import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Response from "./components/response/Response";

function App() {
  return (
    <div className="App">
        <h1>Welcome to Enojada-App</h1>
         <Routes>
            <Route index path='/home' element={<Home />} />
            <Route path='/response' element={<Response />} />
             <Route path="*" element={<Navigate to="/home" replace={true} />}
             />
         </Routes>
    </div>
  );
}

export default App;
