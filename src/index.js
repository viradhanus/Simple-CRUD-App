import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import { render } from "react-dom";
import { AuthProvider } from "@asgardeo/auth-react";

const Index = () => (
  <AuthProvider
    config={{
      clientID: "3dyoqOlfQ6Edbdfhm68h7JVkcxUa",
      serverOrigin: "https://api.asgardeo.io/t/wso2test1234",
      signInRedirectURL: "https://samplecrud.azurewebsites.net",
      signOutRedirectURL: "https://samplecrud.azurewebsites.net",
      scope: ["openid", "profile"],
    }}
  >
    <App />
  </AuthProvider>
);

render(<Index />, document.getElementById("root"));
