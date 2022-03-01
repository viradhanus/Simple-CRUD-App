import "./App.css";
import Create from "./components/create/create";
import Read from "./components/read/read";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Update from "./components/update/update";
import { useAuthContext } from "@asgardeo/auth-react";
import { Button } from "semantic-ui-react";

function App() {
  const { state, signIn, signOut } = useAuthContext();

  return (
    <Router>
      <div className="main">
        {state.isAuthenticated ? (
          <div>
            <div>
              <h3>React Crud Operations</h3>
            </div>

            <div>
              <Route exact path="/" component={Create} />
            </div>

            <div style={{ marginTop: 20 }}>
              <Route exact path="/read" component={Read} />
            </div>

            <Route path="/update" component={Update} />
            <div className="btn_signout">
              <Button color="yellow" onClick={() => signOut()}>
                Log out
              </Button>
            </div>
          </div>
        ) : (
          <Button color="yellow" onClick={() => signIn()}>
            Login
          </Button>
          // <>{signIn()}</>
        )}
      </div>
    </Router>
  );
}

export default App;
