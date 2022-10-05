import React from "react";
import product from './home.css'
import Header from "../Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Feature from "./Features";
const Home = (props) => {
    const white = 'white';
    const { data } = props
    return (
        <>
            <div className="home-part">
                <Header white={white} />
                <div className="home-content">
                    <h1 className="home-title">Rest, Relax, Unwind</h1>
                    <p>Embrace your choices - we do</p>
                    <Link to='/products'><button>SHOW NOW</button></Link>
                </div>
            </div>
            <Feature data={data} /></>


    )
}
export default Home;