import * as React from "react";
import { ScreenAuthenticatedApp } from "../Screens/AuthenticatedAppScreen";
import { Route, Switch, Redirect } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorComponent, FullPageSpinner } from "../utils/lib";
import AuthAppComponentToRender from "./AuthAppComponentToRender";
import { NotFoundPage } from "../Screens/NotFoundPage";
import { useAuth } from "../Context/auth-context";

const AuthenticatedApp = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <Switch>
        <Route path="/dashboard">
          <ScreenAuthenticatedApp
            ComponentToRender={() => AuthAppComponentToRender()}
          />
        </Route>
        <Route path="*">
          <NotFoundPage home="/dashboard" />
        </Route>
      </Switch>
      {/* <Route exact path="/">
        <Redirect to="/dashboard" />
      </Route> */}
    </ErrorBoundary>
  );
};

export default AuthenticatedApp;
