import {useEffect} from 'react';

const NotFound = () => {
    useEffect(() => {
        window.scroll(0, 0);
        document.title = '404: Page not found!';
    })
    return ( <div>Error 404 : Page not found -_-</div> );
}
 
export default NotFound;