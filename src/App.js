import React from "react";
import {Route, Routes} from 'react-router-dom';
// import About from "./pages/About";
import Home from "./pages/Home";
import NavBar from "./components/UI/NavBar";
import NoMatch from "./pages/NoMatch";
import Products from "./pages/Products";
import FeaturedProduct from "./pages/FeaturedProduct";
import NewProduct from "./pages/NewProduct";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";

// Стили
import './styles/styles.css'

function App() {
    return (
        <div className='App'>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                {/*<Route path='about' element={<About />} />*/}
                <Route path='users' element={<Users/>}>
                    <Route path=':userId' element={<UserDetails />} />
                </Route>
                {/* индексный маршрут*/}
                <Route path='products' element={<Products />}>
                    <Route index element={<FeaturedProduct />} />
                    {/*вложенные маршруты - таким образом ссылка будет иметь вид /products/new*/}
                    <Route path='featured' element={<FeaturedProduct />} />
                    <Route path='new' element={<NewProduct />} />
                </Route>
                <Route path='*' element={<NoMatch />} />
            </Routes>
        </div>
    )
}

export default App;