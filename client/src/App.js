import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Todos from "./pages/Todos";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "./components/Footer/index"
import ExternalApi from "../src/pages/ExternalApi";
import history from "../src/utils/history";
// import LoginButton from "./components/LoginButton";
// import LogoutButton from "./components/LogoutButton";
import Styles from "./styles.css"


const App = () => {

  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Router history={history}>
      <Navbar />
      <div style={{backgroundColor: "#f1f1e8"}}>
        <Switch>
          <Route exact path={["/", "/todos"]}>
            <Todos />
          </Route>
          <Route exact path="/todos/:id">
          </Route>
          <Route>
            <NoMatch />
          </Route>
          <Route path="/external-api" component={ExternalApi} />
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
