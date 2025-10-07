import type { RouteObject } from "react-router";
import AppsDiscovery from "../pages/AppsDiscovery";

const routes: RouteObject[] = [
  {
    path: "/apps-discovery",
    element: <AppsDiscovery />,
  },
  {
    path: "/apps-inventory",
    element: <div>Apps Inventory</div>,
  },
];

export default routes;
