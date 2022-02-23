import { useEffect } from "react";
const About = () => {
    useEffect(() => {
        window.scroll(0, 0);
        document.title = 'About | Vishvesh Trivedi'
      }, [])
    return ( 
    <div>
    </div>
 );
}
 
export default About;