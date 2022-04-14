// import components
// react
import { useState } from 'react';
// react-router-dom
import { createSearchParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
// react-bootstrap
import { ButtonGroup, Button } from 'react-bootstrap';
// my components


// import styling
// my styling
import './MenuBar.css';

export function MenuBar(props) {

    const { routes, shopFilters, cart } = props;
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [cartHidden, setCartHidden] = useState(true);

    return (
        <div className='menu-bar'>
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
            <Button onClick={cartHiddenStatus => {setCartHidden(!cartHiddenStatus)}}>
                <cart.icon />
                <span>{cart.getDisplayName()}</span>
            </Button>
        </div>
    )
}