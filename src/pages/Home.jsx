import React from "react";
import {useNavigate} from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()
    return (
        <>
            <div className="element" style={{ margin: "2rem 0" }}>
                Home page
            </div>
            <div>
                <button
                    style={{ display: "block" }}
                    onClick={() => navigate("order-summary")}
                >
                    Place order
                </button>
            </div>
        </>
    )
}

export default Home