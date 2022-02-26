import {useEffect} from 'react';
import notFoundSVG from '../assets/img/page_not_found.svg'

const NotFound = () => {
    useEffect(() => {
        window.scroll(0, 0);
        document.title = '404: Page not found!';
    })
    return ( <div id="not-found">
        <img src={notFoundSVG} alt="" />
        <h2>Oops. Error 404. Page not found!</h2>
        </div> );
}
 
export default NotFound;