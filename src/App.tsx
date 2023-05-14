import { Snackbar } from "./components/UI/Snackbar";
import { useSnackbar } from "./hooks/useSnackbar";

export const App = (): JSX.Element => {
  const { notify } = useSnackbar();

  notify({
    type: "error",
    title: "Authentication",
    message: "Successfully sign in",
    options: {
      position: "bottom-left"
    }
  });

  return (
    <div>
      <h1>MyApp</h1>
      <Snackbar />
    </div>
  );
};
