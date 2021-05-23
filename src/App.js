import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Books from "./components/Books";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact={true} component={Home} path="/" />
          <Route component={AboutUs} path="/about" />
          <Route component={ContactUs} path="/contact" />
          <Route component={Books} path="/books" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
