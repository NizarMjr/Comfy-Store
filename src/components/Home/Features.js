import React, { useState, useEffect } from "react";
import feature from './feature.css'
import PIC1 from '../../images/feature1.jpg'
import PIC2 from '../../images/feature2.jpg'
import PIC3 from '../../images/feature3.jpg'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from "react-router-dom";
const Feature = (props) => {

    const { data, setToggle } = props
    const feature = data.map((item, index) => {
        if (item.name == 'high-back bench' || item.name == 'utopia sofa' || item.name == 'entertainment center')
            return (
                <div className="feature-content" key={index}>
                    <div className="pic">
                        <img src={item.image} alt="picture" />
                        <div className="feature-icon">
                            <Link to='/detail' className="icon" onClick={() => localStorage.setItem('item', JSON.stringify(item))}><AiOutlineSearch /></Link>
                            <div className="icon" onClick={() => increaseShop(item)}><AiOutlineShoppingCart /></div>
                        </div>
                    </div>
                    <p className="feature-title">{item.name}</p>
                    <span className="feature-price">${item.price}</span>
                </div>
            )
    })
    const increaseShop = (item) => {
        let shopNumber = localStorage.getItem('number');
        shopNumber = parseInt(shopNumber) + 1;
        localStorage.setItem('number', shopNumber);
        setToggle()
        const shops = JSON.parse(localStorage.getItem('shop'));
        shops.push(item)
        localStorage.setItem('shop', JSON.stringify(shops))
    }
    return (
        <section className="features">
            <h2>Feature</h2>
            <div className="container">
                <div className="feature-container">
                    {feature}
                </div>
                <Link to='/products'> <button className="feature-btn">All Product</button></Link>
            </div>
        </section>
    )
}
export default Feature;