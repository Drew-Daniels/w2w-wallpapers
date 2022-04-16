// import components
// react-bootstrap
import { Container, Row, Col } from 'react-bootstrap';
// react-router-dom
import { useOutletContext, useSearchParams, } from 'react-router-dom';
// my components
import { Item } from '../Item/Item';

// import styling
import './Items.css';

export function Items(props) {

    const { shopItems, setShopItems } = useOutletContext();
    const [searchParams, setSearchParams] = useSearchParams();

    function matchesSearchParams(shopItem, param) {
        if (searchParams.get(param)) {
            return (shopItem.category === searchParams.get(param));
        }
        return true;
    }

    return (
        <Container className='items-container'>
            <ul className='items'>
                {shopItems
                    .filter((shopItem) => matchesSearchParams(shopItem, 'category'))
                    .map((shopItem, i) => {
                        return (<Item shopItem={shopItem} setShopItems={setShopItems} />)
                })}
            </ul>
        </Container>
    )
}
