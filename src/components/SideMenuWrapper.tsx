import { Box } from "@mui/material";
import type { PropsWithChildren } from "react";
import SideMenu from "./SideMenu";

const SideMenuWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", width: "100%", height: "100vh" }}>
      <SideMenu />
      <Box
        component="main"
        sx={{
          padding: "1rem",
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default SideMenuWrapper;
