import React from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import RouteProps from "./RouteProps";
import ErrorPage from "./ErrorPage";
import LoginInitiator from "../login/common-components/LoginIniator";

const routes: RouteProps[] = [
    {
        path: "/login/sign-in",
    element: <LoginInitiator isSignUp={false} />,
    title: "SignIn",
    errorElement: <ErrorPage />
  },
  {
    path: "/login/sign-up",
    element: <LoginInitiator isSignUp={true} />,
    title: "SignIn",
    errorElement: <ErrorPage />
  },
];

const RenderRoute = createBrowserRouter(routes);

export default RenderRoute;