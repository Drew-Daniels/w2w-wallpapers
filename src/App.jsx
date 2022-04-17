import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { MenuBar } from './components/MenuBar/MenuBar';
import { Cart } from './components/Cart/Cart';
import { Footer } from './components/Footer/Footer';

import { shopItemsData } from './data';

import './App.scss';

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

  const [shopItems, setShopItems] = useState(
    shopItemsData.map(shopItemData => {
      const values = Object.values(shopItemData);
      return new ShopItem(...values);
    })
  );
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => setShowCart(true);
  const handleHideCart = () => setShowCart(false);
  const [cart, setCart] = useState([]);

  return (
    <Container fluid className='content-container'>
      <Container className='d-flex flex-column'>
        <Row>
          <Col md={3}>
            <MenuBar 
              showCart={showCart} 
              handleShowCart={handleShowCart} 
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
