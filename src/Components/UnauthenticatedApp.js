import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UnauthenticatedAppScreen } from "../Screens/UnauthenticatedAppScreen";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "../utils/lib";
import { NotFoundPage } from "../Screens/NotFoundPage";
import { useAuth } from "../Context/auth-context";

const UnauthAppRoutes = (props) => (
  <>
    <Switch>
      <Route path="/login">
        <UnauthenticatedAppScreen {...props} />
      </Route>
      <Route path="/signup">
        <UnauthenticatedAppScreen {...props} form="register" />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
    <Route exact path="/">
      <Redirect to="/login" />
    </Route>
  </>
);

const Unauthenticatedapp = () => {
  const { login, signup } = useAuth();
  const formSubmitHandler = (e, form) => {
    console.log(form);
    e.preventDefault();
    const { email, password, fullName } = e.target;
    form === "register"
      ? signup({
          email: email.value,
          password: password.value,
          name: fullName.value,
        })
      : login({
          email: email.value,
          password: password.value,
        });
  };
  return (
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <UnauthAppRoutes formSubmitHandler={formSubmitHandler} />;
    </ErrorBoundary>
  );
};

export default Unauthenticatedapp;
