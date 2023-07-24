import React from "react";
import {Route, Routes} from 'react-router-dom';
// import About from "./pages/About";
import Home from "./pages/Home";
import NavBar from "./components/UI/NavBar";
import './styles/styles.css'
import NoMatch from "./pages/NoMatch";
import Products from "./pages/Products";
import FeaturedProduct from "./pages/FeaturedProduct";
import NewProduct from "./pages/NewProduct";

function App() {
    return (
        <div className='App'>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                {/*<Route path='about' element={<About />} />*/}
                <Route path='products' element={<Products />}>
                    <Route path='featured' element={<FeaturedProduct />} />
                    <Route path='new' element={<NewProduct />} />
                </Route>
                <Route path='*' element={<NoMatch />} />
            </Routes>
        </div>
    )
}

export default App;