import { styled } from "@mui/material";
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.error?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <StyledErrorPage>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
      <StyledLink to="/">Go back to the home page</StyledLink>
    </StyledErrorPage>
  );
};

const StyledErrorPage = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  width: 100%;
  gap: 1rem;
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1.5rem;
  }
  i {
    font-size: 1rem;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.palette.primary.main};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
