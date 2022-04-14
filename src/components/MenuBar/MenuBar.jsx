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
            <div className='menu-bar-banner-container'>
                <IconContext.Provider value={{}}>
                    <W2WIcon />
                </IconContext.Provider>
                <span>Wall-to-Wall Wallpapers</span>
            </div>
            {/* Routes */}
            <hr />
            <ul className='route-list'>
                {routes.map((route, i) => {
                    return (
                        <li key={i} className='route-list-item'>
                            <Link
                                to={route.name==='home' ? '/': route.name}
                                className='menu-bar-item-link'
                            >
                                <route.icon />
                                <span className='menu-bar-item-text'>{route.getDisplayName()}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            {/* Shop Filters */}
            <hr />
            <ButtonGroup className='shop-filter-list'>
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
                            <shopFilter.icon />
                            <span className='shop-filter-list-item-button-text'>{shopFilter.getDisplayName()}</span>
                        </Button>
                    )
                })}
            </ButtonGroup>
            {/* Cart */}
            <hr />
            <Button onClick={handleShowCart} >
                <cart.icon />
                <span>{cart.getDisplayName()}</span>
            </Button>
        </div>
    )
}
