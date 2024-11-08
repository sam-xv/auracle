import React from "react";
import RouteProps from "./RouteProps";

export default function RenderRoute({ element: Component }: RouteProps) {
    return <Component />;
}