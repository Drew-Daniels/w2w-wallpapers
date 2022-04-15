// import components
// react-router-dom
import { createSearchParams, Link, useNavigate, useOutletContext } from 'react-router-dom';
// react-bootstrap
import { ButtonGroup, Button } from 'react-bootstrap';
// my components

// import icons
// react-icons
import { IconContext } from 'react-icons';
import { MdWallpaper as W2WIcon } from 'react-icons/md';

// import styling
// my styling
import './MenuBar.css';

export function MenuBar(props) {

    const { showCart, handleShowCart, routes, shopFilters, cart } = props;
    const navigate = useNavigate();

    return (
        <div className='menu-bar'>
            {/* Brand Image and Name */}
            <div className='container d-flex flex-column'>
                <IconContext.Provider value={{ size: '4em' }}>
                    <W2WIcon />
                </IconContext.Provider>
                <h1>W2W Wallpapers</h1>
            </div>
            {/* Routes */}
            <hr />
            <ButtonGroup className='d-flex flex-column'>
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
            {/* Shop Filters */}
            <hr />
            <ButtonGroup className='d-flex flex-column'>
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
                            <span>{shopFilter.getDisplayName()}</span>
                        </Button>
                    )
                })}
            </ButtonGroup>
            {/* Cart */}
            <hr />
            <Button onClick={handleShowCart} >
                <IconContext.Provider value={{ size: '2em' }}>
                    <cart.icon className='menu-item-icon' />
                </IconContext.Provider>
                <span>{cart.getDisplayName()}</span>
            </Button>
        </div>
    )
}
