import React, { Component } from "react";
import Header from "./components/Header/Header";
import SideDrawer from "./components/Sidedrawer/SideDrawer";
import BackDrop from "./components/BackDrop/BackDrop";
import BgIntroVideo from "./components/BackgroundVideo/BgIntroVideo";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";
import ScrollToTopBtn from './components/ScrollButton/ScrollTop'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from './components/Pages/Home';
import Skills from './components/Pages/Skills';
import Contact from './components/Pages/Contact';
import About from './components/Pages/About';

import "./index.scss";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      };
    });
  };

  backDropCloseHandler = () => {
    this.setState({
      sideDrawerOpen: false
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.toggleBodyClass);
    this.toggleBodyClass();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggleBodyClass);
  }

  toggleBodyClass = () => {
    if (window.scrollY >= 84) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  };

  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropCloseHandler} />;
    }
    return (
      <div className="App">
        <BrowserRouter>
        <div class="full-height-container">
            <Header drawerClickHandler={this.drawerToggleClickHandler}/>
            <SideDrawer
              show={this.state.sideDrawerOpen}
              close={this.backDropCloseHandler}
            />
            {backDrop}
            {/* <BgIntroVideo /> */}
            <section className="container">
              {/* <Slider /> */}
              <Switch>  
                <Route exact path="/" component={Home}/>
                <Route exact path="/skills" component={Skills}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/about" component={About}/> 
              </Switch>
            </section>
          <Footer />
          <ScrollToTopBtn />
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
