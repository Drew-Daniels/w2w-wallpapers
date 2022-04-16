// import components
// react
import { useEffect, useState } from 'react';
// react-icons components
import {  IconContext } from 'react-icons';
// import icons
// react-icons icons
import { 
    BsFillCartDashFill as DecrCartIcon, 
    BsFillCartPlusFill as IncrCartIcon 
} from 'react-icons/bs';
// react-bootstrap
import { Spinner } from 'react-bootstrap';

import { ButtonGroup, Button, Card } from 'react-bootstrap';

import './Item.css';

export function Item(props) {

    const [loading, setLoading] = useState(true);
    const { shopItem, setShopItems } = props;
    // const [cartQty, setCartQty] = useState(shopItem.cartQty);

    function handleCartDecr() {
        // if (cartQty) {
        //     setCartQty(prevCartQty => prevCartQty - 1);
        // }

        if (shopItem.cartQty) {
            const newShopItem = {...shopItem, cartQty: shopItem.cartQty -1};
            console.log(newShopItem);
            setShopItems(prevShopItems => ({...prevShopItems, newShopItem}))
        }

    }

    function handleCartIncr() {
        // setCartQty(prevCartQty => prevCartQty + 1);
        const newShopItem = {...shopItem, cartQty: shopItem.cartQty + 1};
        console.log(newShopItem);
        setShopItems(prevShopItems => ({...prevShopItems, newShopItem}))
    }

    return (
        <li className='item'>
            <Card>
                <div className='image-container'>
                    {loading &&
                        <div className='loading-container'>
                            <Spinner animation="grow" variant="primary" />
                        </div>
                    }
                    <Card.Img 
                        src={shopItem.imgURL} 
                        style={ loading ? {display: 'none'} : {} }
                        className='item-image'
                        onLoad={() => {setLoading(false)}} 
                    />
                </div> 
                <Card.Body>
                    <Card.Title>{shopItem.brandName}</Card.Title>
                    <div className='d-flex flex-column'>
                        <a href={shopItem.brandURL}>{shopItem.brandURL}</a>
                        <ButtonGroup>
                            <Button onClick={handleCartDecr}>
                                <IconContext.Provider value={{ size: '2em' }}>
                                    <DecrCartIcon className='cart-icon'/>
                                </IconContext.Provider>
                                <span>Remove from Cart</span>
                            </Button>
                            <input value={shopItem.cartQty} style={{ textAlign: 'center'}}></input>
                            <Button onClick={handleCartIncr}>
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
}
