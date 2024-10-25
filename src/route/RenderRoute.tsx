import React from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import RouteProps from "./RouteProps";
import ErrorPage from "./ErrorPage";

const routes: RouteProps[] = [
    {
        path: "/login/sign-in",
        element: <div>Hello world!</div>,
        title: "SignIn",
        errorElement: <ErrorPage />
    },
];

const RenderRoute = createBrowserRouter(routes);

export default RenderRoute;