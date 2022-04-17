import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { MenuBar } from './components/MenuBar/MenuBar';
import { Cart } from './components/Cart/Cart';
import { Footer } from './components/Footer/Footer';


import { shopItemsData } from './data';

import './App.scss';

import { AiOutlineHome as HomeIcon } from 'react-icons/ai';
import { GiMoonOrbit as SpaceIcon } from 'react-icons/gi';
import { GiSittingDog as AnimalsIcon } from 'react-icons/gi';
import { MdEmojiNature as NatureIcon } from 'react-icons/md';
import { FaShapes as MinimalistIcon } from 'react-icons/fa';
import { RiBuilding2Fill as ArchitectureIcon } from 'react-icons/ri';
import { AiOutlineShoppingCart as CartIcon } from 'react-icons/ai';

function App() {

  // Declare classes
  class ShopItem {
    constructor(imgURL, brandName, brandURL, category, reviews, stars, price, id) {
        this.imgURL = imgURL;
        this.brandName = brandName;
        this.brandURL = brandURL;
        this.category = category;
        this.reviews = reviews;
        this.stars = stars;
        this.price = price;
        this.id = id;
    }
    getPrettyPrice() {
      return 'Fill in later';
    }
  }

  class MenuBarItem {
    constructor(name, icon) {
      this.name = name;
      this.icon = icon;
    }
    getDisplayName() {
      return this.name[0].toUpperCase() + this.name.slice(1);
    }
  };

  const [shopItems, setShopItems] = useState(
    shopItemsData.map(shopItemData => {
      const values = Object.values(shopItemData);
      return new ShopItem(...values);
    })
  );
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => setShowCart(true);
  const handleHideCart = () => setShowCart(false);

  // Instantiate classes from data
  const routes = [
    new MenuBarItem('home', HomeIcon),
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
    <Container fluid className='content-container'>
      <Container className='d-flex flex-column'>
        <Row>
          <Col md={3}>
            <MenuBar 
              showCart={showCart} 
              handleShowCart={handleShowCart} 
              routes={routes} 
              shopFilters={shopFilters} 
              cart={cart}
            />
          </Col>
          <Col className='mt-2 d-flex flex-column justify-content-center'>
            <Outlet 
              context={{
                shopItems,
                setShopItems,
              }}
            />
            <Cart 
              showCart={showCart}
              handleHideCart={handleHideCart}
              shopItems={shopItems}
            />
          </Col>
        </Row>
      </Container>
      {/* <Footer /> */}
    </Container>
  );
}

export default App;
