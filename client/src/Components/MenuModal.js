import {NavLink} from 'react-router-dom';

const MenuModal = ({openState}) => {
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
        >
          home()
        </NavLink>
        <NavLink
          to="/blog"
          style={({ isActive }) => ({
            color: isActive ? "#FFD369" : "#ffffff",
          })}
          className="menu-link"
        >
          blog()
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "#FFD369" : "#ffffff",
          })}
          className="menu-link"
        >
          about()
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            color: isActive ? "#FFD369" : "#ffffff",
          })}
          className="menu-link"
        >
          contact()
        </NavLink>
      </nav>
    </div>
  );
};

export default MenuModal;
