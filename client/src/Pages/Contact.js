import { useEffect } from "react";
const Contact = () => {
    useEffect(() => {
        window.scroll(0, 0);
        document.title = 'Contact | Vishvesh Trivedi'
      }, [])
    return ( <div>Contact Page</div> );
}
 
export default Contact;