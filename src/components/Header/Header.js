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
    const { white } = props;
    const [bag, setBag] = useState('0');
    const [smallNav, setSmallNav] = useState('-500px');
    const [shopNumber, setShopNumber] = useState(0);
    useEffect(() => {
        const updateNumber = shopNumber;
        setShopNumber(localStorage.getItem('number'));

        if (updateNumber != shopNumber) toggleBag();
    })
    const toggleBag = () => {
        if (bag == 0) setBag('350px')
        else setBag(0);
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

    return (
        <header className="header" style={{ color: white }}>
            <div className="bag" style={{ width: bag }}>
                <span className="close-bag" onClick={() => toggleBag()}>{<IoIosCloseCircle />}</span>
                <h2 className="bag-title">Your Bag</h2>
                <div className="bag-content"></div>
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
                        <span className="shop-number" >{shopNumber}</span>
                    </div>
                </div>
                <h2 className="header-title">Comfy</h2>
            </div>
        </header>
    )
}
export default Header;