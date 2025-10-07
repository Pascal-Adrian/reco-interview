import type { RouteObject } from "react-router";
import AppsDiscovery from "../pages/AppsDiscovery";

const routes: RouteObject[] = [
  {
    path: "/apps",
    children: [
      {
        path: "discovery",
        element: <AppsDiscovery />,
      },
      {
        path: "inventory",
        element: <div>Apps Inventory</div>,
      },
    ],
  },
];

export default routes;
