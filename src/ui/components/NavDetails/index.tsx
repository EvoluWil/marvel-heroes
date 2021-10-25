import * as React from "react";
import { BottomNavigationAction } from "@mui/material";
import { NavBarStyled, NavContainer } from "./style";

export const NavDetail = () => {
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
        <BottomNavigationAction label="Comics" />
        <BottomNavigationAction label="Series" />
        <BottomNavigationAction label="Stories" />
        <BottomNavigationAction label="Events" />
      </NavBarStyled>
    </NavContainer>
  );
};
