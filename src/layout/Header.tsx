import { useCallback } from "react";

import { styled } from "@mui/material";
import { NavLink, Link } from "react-router-dom";

import { LogoIcon } from "../assets";
import { Button } from "../components/UI/Button/Button";
import { ROLES } from "../utils/constants/general";

const ADMIN_NAVIGATION_LINKS = [
  {
    path: "/admin/tests",
    id: "e1",
    label: "Tests"
  },
  {
    path: "/admin/results",
    id: "e2",
    label: "Submitted results"
  }
];

const СLIENT_NAVIGATION_LINKS = [
  {
    path: "/user/tests",
    id: "r1",
    label: "Tests"
  },
  {
    path: "/user/results",
    id: "r2",
    label: "My results"
  }
];

export const Header = (): JSX.Element => {
  const userRole = "ADMIN";
  // @TODO associate variable "userRole" with user role state

  const navigationLinks =
    userRole === ROLES.ADMIN ? ADMIN_NAVIGATION_LINKS : СLIENT_NAVIGATION_LINKS;

  const renderNavigationLinks = useCallback(() => {
    return navigationLinks.map((link) => (
      <li key={link.id}>
        <NavLink
          to={link.path}
          className={({ isActive }) => {
            return `nav_list__item-link ${isActive ? "nav_list__item-link_active" : ""}`;
          }}
        >
          {link.label}
        </NavLink>
      </li>
    ));
  }, [navigationLinks]);

  const logoutHandler = () => {
    // here must be logout logic
  };

  return (
    <StyledHeader>
      <div className="header-inner_block">
        <div className="logo-wrapper">
          <Link to="/">
            <LogoIcon />
          </Link>
        </div>
        <Navigation>
          <ul className="nav_list">{renderNavigationLinks()}</ul>
          <StyledButton className="logout_button" onClick={logoutHandler}>
            log out
          </StyledButton>
        </Navigation>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled("header")(() => ({
  padding: "1.625rem",
  "& > .header-inner_block": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2%"
  },
  "& .logo-wrapper": {
    minWidth: "98px",
    "& svg": {
      width: "100%"
    }
  }
}));

const Navigation = styled("nav")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "65px",
  "& > .nav_list": {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    gap: "65px"
  },
  "& .nav_list__item-link": {
    fontFamily: "'DINNextRoundedLTPro-Bold'",
    fontSize: "0.9375rem",
    textTransform: "uppercase",
    color: "#4C4859"
  },
  "& .nav_list__item-link_active": {
    color: "#3A10E5"
  }
}));

const StyledButton = styled(Button)(() => ({
  fontFamily: "'DINNextRoundedLTPro-Bold'",
  fontSize: "0.875rem",
  padding: "0.625rem 1.5rem",
  border: "2px solid #3A10E5",
  borderRadius: "8px",
  "&.logout_button:not(:hover)": {
    background: "transparent",
    color: "#4C4C4C",
    border: "2px solid #4C4859"
  }
}));
