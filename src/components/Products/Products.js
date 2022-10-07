import React, { useEffect, useRef, useState } from "react";
import Header from "../Header/Header";
import products from './products.css'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { DebounceInput } from 'react-debounce-input';
import { Link } from "react-router-dom";

const Product = (props) => {
    const { data, toggleShop, setToggle } = props
    const [products, setProducts] = useState(data);
    const [price, setPrice] = useState(50);
    const [search, setSearch] = useState('');
    const companies = ["All", "Ikea", "Marcos", "Caressa", "Liddy"];

    useEffect(() => {
        filterWithPrice();
    }, [])

    const filterWithPrice = () => {
        const filtredData = data.filter((item) => {
            return item && (item.price <= price)
        })
        setProducts(filtredData)
    }

    const filterWithBtns = (e) => {
        if (e == 0) setProducts(data)
        else {
            const checkCompany = companies[e];
            const filtredData = data.filter((item) => {
                return item.company.toLowerCase().includes(checkCompany.toLowerCase())
            })
            setProducts(filtredData)
        }
    }
    const filterWithSearch = () => {
        const filtredData = data.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase())
        })
        setProducts(filtredData)
    }
    const increaseShop = (item) => {
        let shopNumber = localStorage.getItem('number');
        shopNumber = parseInt(shopNumber) + 1;
        localStorage.setItem('number', shopNumber);
        setToggle();
        const shops = JSON.parse(localStorage.getItem('shop'));
        shops.push(item)
        localStorage.setItem('shop', JSON.stringify(shops))
    }
    return (
        <div className="products">
            <Header toggleShop={toggleShop} setToggle={setToggle} />
            <div className="section-head">
                <p>Home / Products</p>
            </div>
            <div className="container">
                <div className="products-part">
                    <div className="filter-container">
                        <div className="filter-part">
                            <DebounceInput minLength={1} debounceTimeout={0} type="text" placeholder="Search..." onChange={(e) => { setSearch(e.target.value); filterWithSearch() }} />
                            <div className="btns-filter">
                                <p>Company</p>
                                {companies.map((item, index) => {
                                    return (
                                        <span className="btn-filter" key={index} onClick={() => filterWithBtns(index)}>{item}</span>
                                    )
                                })}
                            </div>
                            <div className="price-filter">
                                <p>Price </p>
                                <DebounceInput minLength={1} debounceTimeout={0} type="range" value={price} min="0" max="80" onChange={(e) => { setPrice(e.target.value); filterWithPrice() }} />
                                <span>Value: ${price} </span>
                            </div>
                        </div>
                    </div>
                    {products.length != 0 ?
                        <div className="products-content">
                            {products.map((item, index) => {
                                return (
                                    <div className="product-content" key={index}>
                                        <div className="pic">
                                            <img src={item.image} alt="picture" />
                                            <div className="product-icon">
                                                <Link to='/Comfy-Store/detail' className="icon" onClick={() => localStorage.setItem('item', JSON.stringify(item))} ><AiOutlineSearch /></Link >
                                                <div className="icon" onClick={() => increaseShop(item)}><AiOutlineShoppingCart /></div>
                                            </div>
                                        </div>
                                        <p className="product-title">{item.name}</p>
                                        <span className="product-price">${item.price}</span>
                                    </div>
                                )
                            })}
                        </div> : <div className="empty">Sorry, No Products Matched Your Search</div>}
                </div>
            </div>
        </div>
    )
}

export default Product;