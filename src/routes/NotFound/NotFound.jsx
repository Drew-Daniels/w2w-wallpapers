import { Emoji } from '../../components/Emoji/Emoji';

export function NotFound(props) {

    return (
        <div className='d-flex justify-content-center' style={{ fontSize: '2em', color: 'white'}}>
            Stop the presses! I couldn't find that page
            <Emoji symbol='😲'/>
        </div>
    )
}
