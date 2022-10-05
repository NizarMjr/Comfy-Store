import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Details from './components/Details/Details';
import Header from './components/Header/Header';
import Feature from './components/Home/Features';
import Home from './components/Home/Home';
import Product from './components/Products/Products';

function App() {
  const [data, setData] = useState([]);
  const URL = 'https://course-api.com/react-store-products';
  useEffect(() => {
    axios.get(URL).then(res => setData(res.data)).catch(err => console.log(err.message))
  }, [])

  data.forEach((item) => {
    item.price = Math.floor(item.price.toString().charAt(0).concat(item.price.toString().charAt(1)));
  })
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home data={data} />}></Route>
          <Route path='/products' exact element={<Product data={data} />}></Route>
          <Route path='/about' exact element={<About />}></Route>
          <Route path='/detail' exact element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
