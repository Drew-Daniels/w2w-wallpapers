// import components
// react
import { useState } from 'react';
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
    const { shopItem } = props;

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
}
