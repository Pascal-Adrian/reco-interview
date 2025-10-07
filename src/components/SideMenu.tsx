import { Box, Drawer } from "@mui/material";
import Menu from "./NavList";
import Logo from "../assets/svg/RecoLogo.svg?react";

const SideMenu: React.FC = () => {
  return (
    <Box
      component="nav"
      aria-label="site navigation"
      sx={{
        flexShrink: 0,
        display: "flex",
      }}
    >
      <Drawer
        variant="permanent"
        sx={{
          display: "block",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            position: "relative",
            width: "auto",
            minWidth: "fit-content",
            boxSizing: "border-box",
            // borderRight: "none",
          },
        }}
        open
      >
        <Box
          sx={{
            padding: "14px 25px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Logo />
          <Menu />
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideMenu;
