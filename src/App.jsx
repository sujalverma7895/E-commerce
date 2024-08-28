import './App.css';
import { Api } from './Api';
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { FaUser, FaEllipsisV, FaShoppingCart, FaStoreAlt } from 'react-icons/fa';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Api);
  }, []);

  return (
    <div className='app-container'>
      <header className="header">
        <div className="logo">
          <img src="your-logo.png" alt="Flipkart Logo" />
          <span className="explore-plus">Explore <span className="plus">Plus</span></span>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for Products, Brands and More" />
        </div>
        <div className="header-icons">
          <div className="icon">
            <FaUser />
            <span>Login</span>
          </div>
          <div className="icon">
            <FaShoppingCart />
            <span>Cart</span>
          </div>
          <div className="icon">
            <FaStoreAlt />
            <span>Become a Seller</span>
          </div>
          <div className="icon">
            <FaEllipsisV />
          </div>
        </div>
      </header>

      <div className='main-content'>
        <Sidebar />
        <div className='product-container'>
          {data && data.map((item, index) => (
            <div className='product-card' key={index}>
              <div className='product-image'>
                <img src={item.product} alt={item.product_name} />
              </div>
              <p className='product-name'>{item.product_name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
