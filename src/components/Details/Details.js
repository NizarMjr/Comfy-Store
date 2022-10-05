import React from "react";
import Header from "../Header/Header";
import details from './details.css'

const Details = (props) => {
    const detail = JSON.parse(localStorage.getItem('item'))
    return (
        <div className="detail">
            <Header />
            <div className="section-head">
                <h2>Home / {detail.name}</h2>
            </div>
            <div className="container">
                <div className="detail-content">
                    <div className="detail-image">
                        <img src={detail.image} alt="image" />
                    </div>
                    <div className="detail-info">
                        <h2 className="name">{detail.name}</h2>
                        <span className="company">BY {detail.company}</span>
                        <span className="price">${detail.price}</span>
                        <p className="description">{detail.description}</p>
                        <button className="add">add to cart</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Details;