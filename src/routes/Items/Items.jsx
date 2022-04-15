// import components
// react
import { useState } from 'react';

// react-router-dom
import { Link, useOutletContext, useSearchParams, } from 'react-router-dom';

// react-bootstrap
import { ButtonGroup, Button, Card } from 'react-bootstrap';

// react-icons
import {  IconContext } from 'react-icons';

// import icons
// react-icons
import { 
    BsFillCartDashFill as DecrCartIcon, 
    BsFillCartPlusFill as IncrCartIcon 
} from 'react-icons/bs';

// import styling
import './Items.css';

export function Items(props) {

    const { shopItems } = useOutletContext();
    const [searchParams, setSearchParams] = useSearchParams();

    function matchesSearchParams(shopItem, param) {
        if (searchParams.get(param)) {
            return (shopItem.category === searchParams.get(param));
        }
        return true;
    }

    return (
        <main className='items-container'>
            <ul className='items'>
                {shopItems
                    .filter((shopItem) => matchesSearchParams(shopItem, 'category'))
                    .map((shopItem, i) => {
                        return (
                            <li key={i} className='item'>
                                <Card>
                                    <div className='image-container'>
                                        <Card.Img src={shopItem.imgURL} className='item-image' loading='lazy' />
                                    </div> 
                                    <Card.Body>
                                        <Card.Title>{shopItem.brandName}</Card.Title>
                                        {/* <Card.Text>{shopItem.brandURL}</Card.Text> */}
                                        <div className='d-flex flex-column'>
                                            <a href={shopItem.brandURL}>{shopItem.brandURL}</a>
                                            <ButtonGroup>
                                                <Button>
                                                    <IconContext.Provider value={{ size: '2em' }}>
                                                        <DecrCartIcon className='cart-icon'/>
                                                    </IconContext.Provider>
                                                    <span>Remove from Cart</span>
                                                </Button>
                                                <input value={shopItem.cartQty}></input>
                                                <Button>
                                                    <IconContext.Provider value={{ size: '2em' }}>
                                                        <IncrCartIcon className='cart-icon'/>
                                                    </IconContext.Provider>
                                                    <span>Add to Cart</span>
                                                </Button>
                                            </ButtonGroup>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </li>
                        )
                })}
            </ul>
            
        </main>
    )
}
