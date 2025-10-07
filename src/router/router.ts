import { createBrowserRouter } from "react-router";
import routes from "./routes";

const router = createBrowserRouter(routes, {
  basename: "/reco-interview/",
});

export default router;
