import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Todos from "./pages/Todos";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import { useAuth0 } from "@auth0/auth0-react";
// import LoginButton from "./components/LoginButton";
// import LogoutButton from "./components/LogoutButton";


const App = () => {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />
  }
  return (
    <Router>
      <Navbar />
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
