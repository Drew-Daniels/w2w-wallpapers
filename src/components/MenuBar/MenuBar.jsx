import { createSearchParams, Link, useNavigate, useOutletContext } from 'react-router-dom';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';

import { AiOutlineHome as HomeIcon } from 'react-icons/ai';
import { GiMoonOrbit as SpaceIcon } from 'react-icons/gi';
import { GiSittingDog as AnimalsIcon } from 'react-icons/gi';
import { MdEmojiNature as NatureIcon } from 'react-icons/md';
import { FaShapes as MinimalistIcon } from 'react-icons/fa';
import { RiBuilding2Fill as ArchitectureIcon } from 'react-icons/ri';
import { AiOutlineShoppingCart as CartIcon } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { MdWallpaper as W2WIcon } from 'react-icons/md';
import { BsFillBinocularsFill as ShopAllIcon } from 'react-icons/bs';

import './MenuBar.css';

class MenuBarItem {
    constructor(name, icon) {
      this.name = name;
      this.icon = icon;
    }
    getDisplayName() {
      return this.name[0].toUpperCase() + this.name.slice(1);
    }
  };

const routeMenuBarItems = [
    new MenuBarItem('home', HomeIcon),
];

const shopMenuBarItems = [
    new MenuBarItem('space', SpaceIcon),
    new MenuBarItem('animals', AnimalsIcon),
    new MenuBarItem('nature', NatureIcon),
    new MenuBarItem('minimalist', MinimalistIcon),
    new MenuBarItem('architecture', ArchitectureIcon),
];

const cartMenuBarItem = new MenuBarItem('cart', CartIcon);

export function MenuBar(props) {

    const { handleShowCart } = props;
    const navigate = useNavigate();

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
                    {routeMenuBarItems.map((route, i) => {
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
                            navigate('shop');
                            document.documentElement.scrollTop=0;
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
                    {shopMenuBarItems.map((shopFilter, i) => {
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
                                    document.documentElement.scrollTop=0;
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
                <span>0</span>
                <IconContext.Provider value={{ size: '2em' }}>
                    <cartMenuBarItem.icon className='menu-item-icon' />
                </IconContext.Provider>
                <span>{cartMenuBarItem.getDisplayName()}</span>
            </Button>
        </Container>
    )
}
