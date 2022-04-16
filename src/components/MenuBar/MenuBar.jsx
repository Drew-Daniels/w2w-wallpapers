// import components
// react
import { useEffect } from 'react';
// react-router-dom
import { createSearchParams, Link, useNavigate, useOutletContext } from 'react-router-dom';
// react-bootstrap
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
// my components

// import icons
// react-icons
import { IconContext } from 'react-icons';
import { MdWallpaper as W2WIcon } from 'react-icons/md';
import { BsFillBinocularsFill as ShopAllIcon } from 'react-icons/bs';

// import styling
// my styling
import './MenuBar.css';

export function MenuBar(props) {

    const { showCart, handleShowCart, routes, shopFilters, cart, shopItems } = props;
    const navigate = useNavigate();

    useEffect(() => {
        document.getElementById('num-items-in-cart').textContent = ctItemsInCart();
    })

    function ctItemsInCart() {
        var ct = 0;
        shopItems.forEach((shopItem) => {
            ct += shopItem.cartQty;
        })
        return ct;
    }

    return (
        <Container className='d-flex flex-column sticky-top mb-3'>
            {/* Brand Image and Name */}
            <Row>
                <Col>
                    <IconContext.Provider value={{ size: '4em', color: 'rgb(13, 110, 253)' }}>
                        <W2WIcon />
                    </IconContext.Provider>
                </Col>
                <Col className='d-flex align-items-center'>
                    <h1 className='menu-header'>Wall-to-Wall Wallpapers</h1>
                </Col>
            </Row>
            {/* Routes */}
            <hr />
            <Row className='d-flex flex-column'>
                <ButtonGroup vertical>
                    {routes.map((route, i) => {
                        return (
                            <Link
                                key={i}
                                to={route.name==='home' ? '/': route.name}
                                className='menu-bar-item-link btn btn-primary'
                            >
                                <Row>
                                    <Col className='d-flex align-items-center justify-content-center' sm={12} md={6} >
                                        <IconContext.Provider value={{ size: '2em' }}>
                                            <route.icon className='menu-item-icon'/>
                                        </IconContext.Provider>
                                    </Col>
                                    <Col className='d-flex align-items-center justify-content-center' sm={12} md={6} >
                                        <span className='menu-bar-item-text'>{route.getDisplayName()}</span>
                                    </Col>
                                </Row>
                            </Link>
                        )
                    })}
                </ButtonGroup>
            </Row>
            {/* Shop Filters */}
            <hr />
            <Row>
                <ButtonGroup vertical>
                    <Button 
                        className='mb-1'
                        onClick={() => {
                            navigate('shop')
                        }}>
                        <Row>
                            <Col className='d-flex align-items-center justify-content-center' sm={12} md={6} >
                                <IconContext.Provider value={{ size: '2em' }}>
                                    <ShopAllIcon className='menu-item-icon' />
                                </IconContext.Provider>
                            </Col>
                            <Col className='d-flex align-items-center justify-content-center' sm={12} md={6} >
                                <span>Shop All</span>
                            </Col>
                        </Row>
                    </Button>
                    {shopFilters.map((shopFilter, i) => {
                        return (
                            <Button
                                className='mb-1'
                                key={i} 
                                onClick={() => {
                                    navigate({
                                        pathname: '/shop',
                                        search: createSearchParams({
                                            category: shopFilter.name
                                        }).toString()
                                    });
                                }}
                            >
                                <Row>
                                    <Col className='d-flex align-items-center justify-content-center' sm={12} md={6}>
                                        <IconContext.Provider value={{ size: '2em' }}>
                                            <shopFilter.icon />
                                        </IconContext.Provider>
                                    </Col>
                                    <Col className='d-flex align-items-center justify-content-center' sm={12} md={6}>
                                        <span >{'Shop ' + shopFilter.getDisplayName()}</span>
                                    </Col>
                                </Row>
                            </Button>
                        )
                    })}
                </ButtonGroup>
            </Row>
            {/* Cart */}
            <hr />
            <Button onClick={handleShowCart} >
                <span id='num-items-in-cart'>0</span>
                <IconContext.Provider value={{ size: '2em' }}>
                    <cart.icon className='menu-item-icon' />
                </IconContext.Provider>
                <span>{cart.getDisplayName()}</span>
            </Button>
        </Container>
    )
}
