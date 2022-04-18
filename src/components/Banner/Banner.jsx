import { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { MdWallpaper as W2WIcon } from 'react-icons/md';
import { AiOutlineShoppingCart as CartIcon } from 'react-icons/ai';
import './Banner.css';

export function Banner(props) {

    const { cart, handleShowCart } = props;

    useEffect(() => {
        const numCartItems = document.getElementById('num-cart-items');
        numCartItems.textContent = cart.length;
    })

    return (
        <Container className='mt-2' fluid style={{ backgroundColor: 'rgb(0, 30, 60)', borderRadius: '.25em', border: '1px solid rgb(19, 47, 76)' }}>
            <Row>
                <Col sm={12} md={12} lg={2} className='d-flex justify-content-end'>
                    <IconContext.Provider value={{ color: 'rgb(13, 110, 253)', size:'6em' }}>
                        <W2WIcon />
                    </IconContext.Provider>                                        
                </Col>
                <Col className='d-flex justify-content-center align-items-center' sm={12} md={12} lg={8}>
                    <h1 style={{ color: 'rgb(13, 110, 253)' }}>Wall-to-Wall Wallpapers</h1>
                </Col>
                <Col sm={12} md={12} lg={2} className='d-flex justify-content-end align-items-center'>
                    <Button onClick={handleShowCart}>
                        <Row>
                            <Col className='d-flex align-items-center justify-content-center' sm={12} md={12} lg={7}>
                                <IconContext.Provider value={{ size: '2em', marginRight: '1em' }}>
                                    <CartIcon />
                                </IconContext.Provider>
                            </Col>
                            <Col className='d-flex align-items-center justify-content-center' sm={12} md={12} lg={4}>
                                <span id='num-cart-items'></span>
                            </Col>
                        </Row>
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}
