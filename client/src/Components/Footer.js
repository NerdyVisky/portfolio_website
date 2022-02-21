import mernImgURL from '../assets/img/mern.jpg'

const Footer = () => {
    return ( 
        <footer>
            <div className="developed-by">Handcrafted with &#10084; by Vishvesh Trivedi</div>
            <div className="developed-with"><span>Powered by </span><img src={mernImgURL} alt="" /></div>
        </footer>
     );
}
 
export default Footer;