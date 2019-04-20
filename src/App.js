import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Verein from "./components/pages/Verein";
import Vorstand from "./components/pages/Vorstand";
import Training from "./components/pages/Training";
import Sports from "./components/pages/Sports";
import Platzbelegung from "./components/pages/Platzbelegung";
import Lageplan from "./components/pages/Lageplan";
import NotFound from "./components/pages/NotFound";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                </div>

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/verein" exact component={Verein} />
                    <Route path="/vorstand" exact component={Vorstand} />
                    <Route path="/training" exact component={Training} />
                    <Route path="/sports" exact component={Sports} />
                    <Route
                        path="/platzbelegung"
                        exact
                        component={Platzbelegung}
                    />
                    <Route path="/lageplan" exact component={Lageplan} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
