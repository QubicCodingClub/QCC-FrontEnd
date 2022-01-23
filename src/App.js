import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Auth/Login";
const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Login" element={<Login />} />
            </Routes>
        </div>
    );
};

export default App;
