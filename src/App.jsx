// import components
// react
import { useState } from 'react';
// react-router-dom
import { Outlet, Link } from 'react-router-dom';
// my components
import { MenuBar } from './components/MenuBar/MenuBar';
import { Cart } from './components/Cart/Cart';
// import data
import data from './data';

// import styling
// my styling
import './App.scss';

// import ICONS
// react-icons
// for routes
import { AiOutlineHome as HomeIcon } from 'react-icons/ai';
import { AiOutlineShopping as ShopIcon } from 'react-icons/ai';
import { MdWallpaper as AppIcon } from 'react-icons/md';
// for shop filters
import { GiMoonOrbit as SpaceIcon } from 'react-icons/gi';
import { GiSittingDog as AnimalsIcon } from 'react-icons/gi';
import { MdEmojiNature as NatureIcon } from 'react-icons/md';
import { FaShapes as MinimalistIcon } from 'react-icons/fa';
import { RiBuilding2Fill as ArchitectureIcon } from 'react-icons/ri';
// for cart
import { AiOutlineShoppingCart as CartIcon } from 'react-icons/ai';

function App() {

  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => setShowCart(true);
  const handleHideCart = () => setShowCart(false);


  class MenuBarItem {
    constructor(name, icon) {
      this.name = name;
      this.icon = icon;
    }
    getDisplayName() {
      return this.name[0].toUpperCase() + this.name.slice(1);
    }
  };

  const routes = [
    new MenuBarItem('home', HomeIcon),
    new MenuBarItem('shop', ShopIcon),
  ];

  const shopFilters = [
    new MenuBarItem('space', SpaceIcon),
    new MenuBarItem('animals', AnimalsIcon),
    new MenuBarItem('nature', NatureIcon),
    new MenuBarItem('minimalist', MinimalistIcon),
    new MenuBarItem('architecture', ArchitectureIcon),
  ];

  const cart = new MenuBarItem('cart', CartIcon);

  return (
    <div className='content-container'>
      <div className='content'>
        <MenuBar 
          showCart={showCart} 
          handleShowCart={handleShowCart} 
          routes={routes} 
          shopFilters={shopFilters} 
          cart={cart}
        />
        {/* 
          Either Home, Items, or Item will be rendered here 
          Use context object on Outlet to send state, state methods you want referenced in the destination URL
        */}
        <Outlet 
          context={{
            shopItems: data,
          }}
        />
        <Cart 
          showCart={showCart}
          handleHideCart={handleHideCart}
        />
      </div>
    </div>
  );
}

export default App;
