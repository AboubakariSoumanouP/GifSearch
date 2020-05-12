import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Header from "./components/Header";
import "./App.css";
import NavBar from "./components/NavBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "Search",
    };
  }
  componentDidMount() {
    this.addPageActiveClass();
  }

  componentDidUpdate() {
    this.addPageActiveClass();
  }

  addPageActiveClass() {
    const activeLink = document.querySelector(".active-page");
    if (activeLink) {
      activeLink.classList.remove("active-page");
    }

    const navLinks = document.querySelectorAll(".navbar a");
    const searchText = this.state.activePage;

    for (var i = 0; i < navLinks.length; i++) {
      if (navLinks[i].innerText.includes(searchText)) {
        navLinks[i].classList.add("active-page");
        break;
      }
    }
  }
  changePage = (newPage) => {
    this.setState({ activePage: newPage });
  };
  render() {
    const GalleryComponent = () => <Gallery />;
    const AboutComponent = () => <About />;
    return (
      <Router basename="/">
        <Header />
        <NavBar
          activePage={this.state.activePage}
          changePage={this.changePage}
        />
        <Switch>
          <Route exact path="/" component={GalleryComponent} />
          <Route exact path="/about" component={AboutComponent} />
          <Route exact path="/search" component={GalleryComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
