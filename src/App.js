import React from "react";
import {Route, Routes} from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import NavBar from "./components/UI/NavBar";
import './styles/styles.css'

function App() {
    return (
        <div className='App'>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
            </Routes>
        </div>
    )
}

export default App;