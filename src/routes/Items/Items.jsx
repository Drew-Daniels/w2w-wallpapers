import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useOutletContext, useSearchParams, } from 'react-router-dom';
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

    const displayItems = shopItems.filter((shopItem) => matchesSearchParams(shopItem, 'category'));

    useEffect(() => {
        console.log(shopItems);
    }, [shopItems])

    return (
        <Container fluid className='mt-2 d-flex flex-column'>
            {displayItems
                .map((shopItem, i) => {
                    return (<Item key={i} shopItem={shopItem} shopItems={shopItems} setShopItems={setShopItems} />)
            })}
        </Container>
    )
}
