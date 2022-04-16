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
        <Container className='menu-bar'>
            {/* Brand Image and Name */}
            <Row>
                <Col>
                    <IconContext.Provider value={{ size: '4em', color: 'rgb(13, 110, 253)' }}>
                        <W2WIcon />
                    </IconContext.Provider>
                </Col>
                <Col className='d-flex align-items-center'>
                    <span>Wall to Wall Wallpapers</span>
                </Col>
            </Row>
            {/* Routes */}
            <hr />
            <Row className='d-flex flex-column'>
                <ButtonGroup >
                    {routes.map((route, i) => {
                        return (
                            <Link
                                key={i}
                                to={route.name==='home' ? '/': route.name}
                                className='menu-bar-item-link btn btn-primary'
                            >
                                <IconContext.Provider value={{ size: '2em' }}>
                                    <route.icon className='menu-item-icon'/>
                                </IconContext.Provider>
                                <span className='menu-bar-item-text'>{route.getDisplayName()}</span>
                            </Link>
                        )
                    })}
                </ButtonGroup>
            </Row>
            {/* Shop Filters */}
            <hr />
            <Row>
                <ButtonGroup className='d-flex flex-column'>
                    <Button onClick={() => {
                        navigate('shop')
                    }}>
                        <IconContext.Provider value={{ size: '2em' }}>
                            <ShopAllIcon className='menu-item-icon' />
                        </IconContext.Provider>
                        <span>Shop All</span>
                    </Button>
                    <hr />
                    {shopFilters.map((shopFilter, i) => {
                        return (
                            <Button
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
                                <IconContext.Provider value={{ size: '2em' }}>
                                    <shopFilter.icon className='menu-item-icon' />
                                </IconContext.Provider>
                                <span>{'Shop ' + shopFilter.getDisplayName()}</span>
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
