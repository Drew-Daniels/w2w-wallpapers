// import components

// react-router-dom
import { useOutletContext, useSearchParams, } from 'react-router-dom';

// my componets
import { Item } from '../Item/Item';

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
                        return (<Item shopItem={shopItem} />)
                })}
            </ul>
        </main>
    )
}
