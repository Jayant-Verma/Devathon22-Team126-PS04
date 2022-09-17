import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hall from "./pages/hall/Hall";
import List from "./pages/list/List";
import Login from "./pages/login/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/halls" element={<List />} />
                <Route path="/halls/:id" element={<Hall />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
