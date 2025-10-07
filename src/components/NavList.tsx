import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router";

const navigationItems = [
  {
    name: "Apps Discovery",
    link: "/apps/discovery",
  },
  {
    name: "Apps Inventory",
    link: "/apps/inventory",
  },
];

const NavList: React.FC = () => {
  const location = useLocation();

  return (
    <List>
      {navigationItems.map((item) => (
        <ListItem key={item.link} disablePadding>
          <ListItemButton
            component={Link}
            to={item.link}
            selected={location.pathname === item.link}
            sx={{
              borderLeft: "4px solid transparent",
              borderLeftColor: "primary.main",
              "&:hover": {
                borderLeft:
                  location.pathname !== item.link
                    ? "4px solid"
                    : "4px solid transparent",
                borderLeftColor:
                  location.pathname !== item.link
                    ? "primary.main"
                    : "4px solid transparent",
                borderLeftOpacity:
                  location.pathname !== item.link ? 0.5 : undefined,
              },
              "&.Mui-selected": {
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              },
            }}
          >
            <ListItemText primary={item.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
