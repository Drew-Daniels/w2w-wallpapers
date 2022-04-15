// import components
// react-router-dom
import { Link, useOutletContext, useSearchParams } from 'react-router-dom';

// react-bootstrap


// import styling
import './Items.css';

export function Items(props) {

    const { shopItems } = useOutletContext();
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <main>
            <ul className='items'>
                {shopItems
                    .filter(shopItem => shopItem.category === searchParams.get('category'))
                    .map((shopItem, i) => {
                        return (
                            <li key={i} className='item'>
                                <Link
                                    to={shopItem.id}
                                >
                                    <figure>
                                        <img src={shopItem.imgURL} alt={shopItem.brandName} className='item-image' loading='lazy' />
                                        <figcaption>{`Image by ${shopItem.brandName} @ ${shopItem.brandURL}`}</figcaption>
                                    </figure>
                                </Link>
                            </li>
                        )
                })}
            </ul>
            
        </main>
    )
}
