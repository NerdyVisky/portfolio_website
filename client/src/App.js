//importing styles and media files
import "./App.css";

//importing React and it's dependencies
import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//importing Page components
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";

//importing App Components
import Navbar from "./Components/Navbar";
import MenuModal from "./Components/MenuModal";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {vw : window.innerWidth, isMenuOpen: false}
  }
  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  toggleMenu = (e) => {
    this.setState(prevState => ({
      isMenuOpen : !prevState.isMenuOpen
    }));
  }
  
   componentDidMount() {
    window.addEventListener("resize", this.handleResize);
   }
  
   componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
   } 
  render() {
    return (
      <Router>
        <MenuModal openState={this.state.isMenuOpen}/>
        <Navbar vw={this.state.vw} onPress={this.toggleMenu} style={{position: 'fixed', top: 0}}/>
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/*"element={<NotFound />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
