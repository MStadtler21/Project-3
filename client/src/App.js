import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Todos from "./pages/Todos";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer/index"
// import LoginButton from "./components/LoginButton";
// import LogoutButton from "./components/LogoutButton";
import Styles from "./styles.css"


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
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
