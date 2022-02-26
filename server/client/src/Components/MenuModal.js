import {NavLink} from 'react-router-dom';

const MenuModal = ({openState, onPress}) => {
  let classes = "menu-modal";
  if(openState){
      classes += " open";
  }
  return (
    <div className={classes}>
      <nav className="menu-nav">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#FFD369" : "#ffffff",
          })}
          className="menu-link"
          onClick={onPress}
        >
          home()
        </NavLink>
        <NavLink
          to="/blog"
          style={({ isActive }) => ({
            color: isActive ? "#FFD369" : "#ffffff",
          })}
          className="menu-link"
          onClick={onPress}
        >
          blog()
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "#FFD369" : "#ffffff",
          })}
          className="menu-link"
          onClick={onPress}
        >
          about()
        </NavLink>
        <NavLink
          to="/hire"
          style={({ isActive }) => ({
            color: isActive ? "#FFD369" : "#ffffff",
          })}
          className="menu-link"
          onClick={onPress}
        >
          hire()
        </NavLink>
        <div className="developed-by-menu">
        Developed by Vishvesh Trivedi
      </div>
      </nav>
    </div>
  );
};

export default MenuModal;
