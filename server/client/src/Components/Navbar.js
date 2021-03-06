import { NavLink } from "react-router-dom";

import profileImgURL from "../assets/img/profile_img.jpeg";
const Navbar = ({vw, onPress}) => {
   let element = null;
   let profileSize = "60px";
   if(vw>=768){
       element = <nav>
       <NavLink
         to="/"
         style={({ isActive }) => ({
           color: isActive ? "#FFD369" : "#ffffff",
         })}
       >
         home()
       </NavLink>
       <NavLink
         to="/blog"
         style={({ isActive }) => ({
           color: isActive ? "#FFD369" : "#ffffff",
         })}
       >
         blog()
       </NavLink>
       <NavLink
         to="/about"
         style={({ isActive }) => ({
           color: isActive ? "#FFD369" : "#ffffff",
         })}
       >
         about()
       </NavLink>
       <NavLink
         to="/hire"
         style={({ isActive }) => ({
           color: isActive ? "#FFD369" : "#ffffff",
         })}
       >
         hire()
       </NavLink>
     </nav>;
   }else{
       element = <nav>
            <svg
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="48px"
            height="48px"
            onClick={onPress}
          >
            <path
              d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"
            />
          </svg>
       </nav>;
       profileSize = "50px";
   }
  return (
    <header>
      <div className="nav-profile">
      <NavLink
         to="/about"
         style={({ isActive }) => ({
           color: isActive ? "#FFD369" : "#ffffff",
         })}
       >
        <img width={profileSize} src={profileImgURL} alt="Vishvesh Trivedi" />
       </NavLink>
        <h3>
      <NavLink
         to="/"
         style={({ isActive }) => ({
           color: isActive ? "#FFD369" : "#ffffff",
         })}
       >
         <span style={{color: 'white'}}>vishveshtrivedi</span><span className="secondary-accent">.in</span>
       </NavLink>
       </h3>
      </div>
      {element}
    </header>
  );
};

export default Navbar;
