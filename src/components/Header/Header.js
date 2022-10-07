import React, { useEffect, useRef, useState } from "react";
import { FaShoppingCart } from 'react-icons/fa'
import { IoIosCloseCircle } from 'react-icons/io'
import { FaBars } from 'react-icons/fa'
import { AiTwotoneHome } from 'react-icons/ai'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { FcAbout } from 'react-icons/fc'
import header from './header.css'
import { Link } from "react-router-dom";
const Header = (props) => {
    const { white, toggleShop, setToggle } = props;
    const [bag, setBag] = useState('');
    const [smallNav, setSmallNav] = useState('-500px');
    const [shops, setShops] = useState(JSON.parse(localStorage.getItem('shop')))

    useEffect(() => {
        if (toggleShop === true) {
            toggleBag();
            setShops(JSON.parse(localStorage.getItem('shop')));
        };
    })

    let totalPrice = 0;
    const toggleBag = () => {
        if (bag == '' || toggleShop === true) {
            setBag('show');
            setToggle();
        }
        else {
            setBag('');
        }
        console.log('toggled');
    }
    const toggleSmallNav = () => {
        smallNav == '-500px' ? setSmallNav('0') : setSmallNav('-500px')
    }
    const [sale, setSale] = useState([]);
    const sales = sale.map((item) => {
        return (
            <div className="sale-pic">{item.img}</div>
        )
    })
    const removeShop = (id) => {
        const updateShop = shops.filter((item, index) => {
            return `${item.id + index}` != id;
        })
        localStorage.setItem('shop', JSON.stringify(updateShop))
        setShops(JSON.parse(localStorage.getItem('shop')));
        let updateNumber = localStorage.getItem('number');
        updateNumber = parseInt(updateNumber) - 1;
        localStorage.setItem('number', updateNumber);
    }
    const allShop = shops.map((item, index) => {
        totalPrice += item.price
        return (
            <div className="shop" key={index}>
                <img src={item.image} />
                <div className="shop-content">
                    <p className="shop-title">{item.name}</p>
                    <span className="shop-price">${item.price}</span>
                    <span className="remove-shop" onClick={() => removeShop(`${item.id + index}`)}>remove</span>
                </div>

            </div>
        )
    })
    return (
        <header className="header" style={{ color: white }}>
            <div className={`bag ${bag}`}>
                <span className="close-bag" onClick={() => toggleBag()}>{<IoIosCloseCircle />}</span>
                <h2 className="bag-title">Your Bag</h2>
                <div className="bag-content">
                    {allShop}
                </div>
                <span className="total-price">Total : ${totalPrice}</span>
                <button>Checkout</button>
            </div>
            <div className="container">
                <div className="header-content">
                    <div className="icon-list" onClick={() => toggleSmallNav()}><FaBars /></div>
                    <div className="nav-small-screen" style={{ left: smallNav }}>
                        <div className="close-list" onClick={() => toggleSmallNav()}><IoIosCloseCircle /></div>
                        <ul>
                            <Link to='/' className="list"><AiTwotoneHome /><li>Home</li></Link>
                            <Link to='/products' className="list"><MdOutlineProductionQuantityLimits /><li>Product</li></Link>
                            <Link to='/about' className="list"><FcAbout /><li>About</li></Link>
                        </ul>
                    </div>
                    <ul className="header-list">
                        <Link to='/' className="anchor">Home</Link>
                        <Link to='/products' className="anchor">Products</Link>
                        <Link to='/about' className="anchor">About</Link>
                    </ul>
                    <div className="icon" onClick={() => toggleBag()}>
                        <FaShoppingCart />
                        <span className="shop-number" >{localStorage.getItem('number')}</span>
                    </div>
                </div>
                <h2 className="header-title">Comfy</h2>
            </div>
        </header>
    )
}
export default Header;