import { RouterProvider } from "react-router";
import router from "./router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./styles/theme";

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
);

export default App;
