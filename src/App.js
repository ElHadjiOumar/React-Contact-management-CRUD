import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageIntrouvable from "./components/pages/PageIntrouvable";
import AddContact from "./components/contact/AddContact";
import EditContact from "./components/contact/EditContact";
import Contact from "./components/contact/Contact";
import Client from "./components/pages/Client";
import Serveur from "./components/pages/Serveur";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/serveur" component={Serveur} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/contact/add" component={AddContact} />
          <Route exact path="/contact/edit/:id" component={EditContact} />
          <Route exact path="/contact/:id" component={Contact} />
          <Route exact path="/client" component={Client} />
          <Route component={PageIntrouvable} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
