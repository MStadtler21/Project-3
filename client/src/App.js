import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import NoMatch from "./pages/NoMatch";
// import ExternalApi from "../src/pages/ExternalApi";
import history from "../src/utils/history";

import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
// import Sidebar from "./components/Sidebar";
import Welcome from "./pages/Welcome";
import Footer from "./components/Footer/index"
import Todos from "./pages/Todos";
import Profile from "./pages/Profile";
import { FullScreen, useFullScreenHandle } from "react-full-screen"
import ListBuilder from "./pages/ListBuilder";
// import Styles from "./styles.css";

const App = () => {

  const { isAuthenticated, isLoading, error } = useAuth0();
  const handle = useFullScreenHandle();
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  
  return (
    <Router history={history}>
      <Navbar handle = {handle}/>
      <FullScreen handle = {handle}>
        <body>
          <main>
          <Router>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/orders" component={Todos} />
              <Route exact path="/builder" component={ListBuilder} />
              <Route path="/profile" component={Profile} />
          </Router>
          </main>
        </body>
      <Footer />
      </FullScreen>
    </Router>

  );
}

export default App;
