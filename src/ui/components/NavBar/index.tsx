import * as React from "react";
import { BottomNavigationAction } from "@mui/material";
import { NavBarStyled, NavContainer } from "./style";

export const NavBar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <NavContainer>
      <NavBarStyled
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" />
        <BottomNavigationAction label="Favorites" />
        <BottomNavigationAction label="Nearby" />
      </NavBarStyled>
    </NavContainer>
  );
};
