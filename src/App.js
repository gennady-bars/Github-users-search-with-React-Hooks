import React from "react";
import { BrowserRouter } from "react-router-dom";
import AlertState from "./context/alert/AlertState";
import GithubState from "./context/github/GithubState";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";

function App() {
  return (
    <ErrorBoundary>
      <GithubState>
        <AlertState>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </AlertState>
      </GithubState>
    </ErrorBoundary>
  );
}

export default App;
