import { useState, useReducer } from 'react';
import { Container, Badge } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { BsFillCartDashFill as DecrCartIcon, BsFillCartPlusFill as IncrCartIcon } from 'react-icons/bs';
import { Spinner } from 'react-bootstrap';
import { Button, Card } from 'react-bootstrap';

import './Item.css';

export function Item(props) {

    const [loading, setLoading] = useState(true);
    const { category, imgURL, brandName, brandURL } = props.shopItem;

    const initialState = { cartQty: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return {cartQty: state.cartQty + 1};
            case 'decrement':
                if (state.cartQty > 0) {
                    return {cartQty: state.cartQty - 1}
                }
                break;
            default:
                throw new Error();
        }
      }

    return (
        <Container className='item'>
            <Card>
                <Card.Header>
                    <Badge pill bg={category}>{category[0].toUpperCase() + category.slice(1)}</Badge>
                </Card.Header>
                <div>
                    {loading &&
                        <div className='d-flex justify-content-center align-items-center'>
                            <Spinner animation="grow" variant="primary" />
                        </div>
                    }
                    <Card.Img 
                        src={imgURL} 
                        style={ loading ? {display: 'none'} : {} }
                        onLoad={() => {setLoading(false)}} 
                    />
                </div> 
                <Card.Body>
                    <Card.Title>{brandName}</Card.Title>
                    <div className='d-flex flex-column'>
                        <a href={brandURL}>{brandURL}</a>
                        <Container className='d-flex justify-content-center mt-2'>
                            <Button onClick={() => dispatch({type: 'decrement'})}>
                                <IconContext.Provider value={{ size: '1em' }}>
                                    <DecrCartIcon />
                                </IconContext.Provider>
                            </Button>
                            <input 
                                value={state.cartQty}
                                style={{ textAlign: 'center', width: '4em'}}
                            ></input>
                            <Button onClick={() => dispatch({type: 'increment'})} >
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
