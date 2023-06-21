import { Navigate } from "react-router-dom";

import { ROUTES } from "../utils/constants/routes";

export interface PrivateRouteProps {
  Component: JSX.Element;
  fallback?: string;
  roles: string; // @TODO replace with real roles
}

const role = "ADMIN"; // @TODO replace with real role

export function PrivateRoute({
  roles,
  Component,
  fallback = ROUTES.AUTH.INDEX
}: PrivateRouteProps): JSX.Element {
  const isUserHasRole = role && roles.includes(role);

  if (!isUserHasRole) return <Navigate to={fallback} replace />;
  return Component;
}
