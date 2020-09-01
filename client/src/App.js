import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Todos from "./pages/Todos";
import NoMatch from "./pages/NoMatch";


function App() {
  return (
    <Router>
      <div>
        
        <Switch>
          <Route exact path={["/", "/todos"]}>
            <Todos />
          </Route>
          <Route exact path="/todos/:id">
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
