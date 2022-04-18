import { createSearchParams, Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';

import { AiOutlineHome as HomeIcon } from 'react-icons/ai';
import { GiMoonOrbit as SpaceIcon } from 'react-icons/gi';
import { GiSittingDog as AnimalsIcon } from 'react-icons/gi';
import { MdEmojiNature as NatureIcon } from 'react-icons/md';
import { FaShapes as MinimalistIcon } from 'react-icons/fa';
import { RiBuilding2Fill as ArchitectureIcon } from 'react-icons/ri';
import { IconContext } from 'react-icons';
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

const shopMenuBarItems = [
    new MenuBarItem('space', SpaceIcon),
    new MenuBarItem('animals', AnimalsIcon),
    new MenuBarItem('nature', NatureIcon),
    new MenuBarItem('minimalist', MinimalistIcon),
    new MenuBarItem('architecture', ArchitectureIcon),
];

export function MenuBar(props) {

    const navigate = useNavigate();

    return (
        <Container className='d-flex flex-column sticky-top my-3 py-3' style={{ backgroundColor: 'rgb(0, 30, 60)', borderRadius: '.25em', border: '1px solid rgb(19, 47, 76)', top: '0.5em' }} >
            <Row>
                <ButtonGroup vertical>
                    {/* Routes */}
                    {/* Home Route */}
                    <Link
                        to={'/'}
                        className='menu-bar-item-link btn btn-primary mb-1'
                    >
                        <Row>
                            <Col className='d-flex align-items-center justify-content-center' sm={12} md={12} lg={3} >
                                <IconContext.Provider value={{ size: '1em' }}>
                                    <HomeIcon className='menu-item-icon'/>
                                </IconContext.Provider>
                            </Col>
                            <Col className='d-flex align-items-center justify-content-center' sm={12} md={12} lg={9} >
                                <span className='menu-bar-item-text'>Home</span>
                            </Col>
                        </Row>
                    </Link>
                    {/* Shop Route */}
                    <Button 
                        className='mb-1'
                        onClick={() => {
                            navigate('shop');
                            document.documentElement.scrollTop=0;
                        }}>
                        <Row>
                            <Col className='d-flex align-items-center justify-content-center' sm={12} md={12} lg={3} >
                                <IconContext.Provider value={{ size: '1em' }}>
                                    <ShopAllIcon className='menu-item-icon' />
                                </IconContext.Provider>
                            </Col>
                            <Col className='d-flex align-items-center justify-content-center' sm={12} md={12} lg={9} >
                                <span>Shop All</span>
                            </Col>
                        </Row>
                    </Button>
                    {/* Shop Filters */}
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
                                    <Col className='d-flex align-items-center justify-content-center' sm={12} md={12} lg={3}>
                                        <IconContext.Provider value={{ size: '1em' }}>
                                            <shopFilter.icon />
                                        </IconContext.Provider>
                                    </Col>
                                    <Col className='d-flex align-items-center justify-content-center' sm={12} md={12} lg={9}>
                                        <span >{'Shop ' + shopFilter.getDisplayName()}</span>
                                    </Col>
                                </Row>
                            </Button>
                        )
                    })}
                </ButtonGroup>
            </Row>
        </Container>
    )
}
