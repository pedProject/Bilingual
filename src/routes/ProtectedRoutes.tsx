import { Navigate } from "react-router-dom";

import { ROUTE_PATHS } from "./routePaths";

export interface PrivateRouteProps {
  Component: JSX.Element;
  fallback?: string;
  roles: string[]; // @TODO replace with real roles
}

const role = "admin"; // @TODO replace with real role

export function PrivateRoute({
  roles,
  Component,
  fallback = ROUTE_PATHS.AUTH.INDEX
}: PrivateRouteProps): JSX.Element {
  const isUserHasRole = role && roles.includes(role);

  if (!isUserHasRole) return <Navigate to={fallback} replace />;
  return Component;
}
