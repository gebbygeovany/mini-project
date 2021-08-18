import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";


import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home/:personName" component={Home} />
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
