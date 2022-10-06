import React from "react";
import Header from "../Header/Header";
import details from './details.css'

const Details = (props) => {
    const { toggleShop, setToggle } = props;
    const detail = JSON.parse(localStorage.getItem('item'))

    const increaseShop = (detail) => {
        let shopNumber = localStorage.getItem('number');
        shopNumber = parseInt(shopNumber) + 1;
        localStorage.setItem('number', shopNumber);
        setToggle();
        const shops = JSON.parse(localStorage.getItem('shop'));
        shops.push(detail)
        localStorage.setItem('shop', JSON.stringify(shops))
    }
    return (
        <div className="detail">
            <Header toggleShop={toggleShop} setToggle={setToggle} />
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
                        <button className="add" onClick={() => increaseShop(detail)}>add to cart</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Details;