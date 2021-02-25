import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Games } from "./Components/Games";
import { Streams } from "./Components/Streams";
// import { Header } from "./Components/Headers";
import TopAppBar from "./Components/AppBar";
import { NotFound } from "./Components/NotFound";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

// import "./App.css";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <TopAppBar />
        <Switch>
          <Route exact path="/" component={Games} />
          <Route exact path="/top-streams" component={Streams} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
