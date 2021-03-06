import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { Banner } from './components/Banner/Banner';
import { MenuBar } from './components/MenuBar/MenuBar';
import { Cart } from './components/Cart/Cart';
import { Footer } from './components/Footer/Footer';

import { shopItemsData } from './data';

import './App.scss';

function App() {

  // Declare classes
  class ShopItem {
    constructor(imgURL, brandName, brandURL, category, stars, price, id) {
        this.imgURL = imgURL;
        this.brandName = brandName;
        this.brandURL = brandURL;
        this.category = category;
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

  function addToCart(id) {
    const shopItem = shopItems.find(shopItem => shopItem.id === id);
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart.push(shopItem);
      return newCart;
    })
  }

  function removeFromCart(id) {
    const i = cart.findIndex(cartItem => cartItem.id === id);
    if (i > -1) {
      // found
      setCart((prevCart) => {
        const newCart = [...prevCart];
        newCart.splice(i, 1);
        return newCart;
      })
    }
  }

  return (
    <Container fluid className='content-container min-vh-100' style={{ backgroundColor: ' rgb(0, 30, 60)'}} >
      <Container className='d-flex flex-column flex-grow-1'>
        <Row>
          <Banner 
            cart={cart}
            handleShowCart={handleShowCart}
            handleHideCart={handleHideCart}
          />
        </Row>
        <Row>
          <Col md={3}>
            <MenuBar />
          </Col>
          <Col className='mt-2 d-flex flex-column justify-content-center'>
            <Outlet 
              context={{
                shopItems,
                setShopItems,
                cart,
                addToCart,
                removeFromCart,
              }}
            />
            <Cart 
              showCart={showCart}
              handleHideCart={handleHideCart}
              shopItems={shopItems}
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
}

export default App;
