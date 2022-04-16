// import components
// react
import { useEffect, useState } from 'react';
// react-bootstrap
import { Container, Badge } from 'react-bootstrap';
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
        <Container className='item'>
            <Card>
                <Card.Header>
                    <Badge pill bg={shopItem.category}>{shopItem.category[0].toUpperCase() + shopItem.category.slice(1)}</Badge>
                </Card.Header>
                <div>
                    {loading &&
                        <div className='d-flex justify-content-center align-items-center'>
                            <Spinner animation="grow" variant="primary" />
                        </div>
                    }
                    <Card.Img 
                        src={shopItem.imgURL} 
                        style={ loading ? {display: 'none'} : {} }
                        onLoad={() => {setLoading(false)}} 
                    />
                </div> 
                <Card.Body>
                    <Card.Title>{shopItem.brandName}</Card.Title>
                    <div className='d-flex flex-column'>
                        <a href={shopItem.brandURL}>{shopItem.brandURL}</a>
                        <Container className='d-flex justify-content-center mt-2'>
                            <Button onClick={handleCartDecr}>
                                <IconContext.Provider value={{ size: '1em' }}>
                                    <DecrCartIcon />
                                </IconContext.Provider>
                            </Button>
                            <input value={shopItem.cartQty} style={{ textAlign: 'center', width: '4em'}}></input>
                            <Button onClick={handleCartIncr} >
                                <IconContext.Provider value={{ size: '1em' }}>
                                    <IncrCartIcon />
                                </IconContext.Provider>
                            </Button>
                        </Container>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    )
}
