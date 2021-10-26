import * as React from "react";
import { BottomNavigationAction } from "@mui/material";
import { NavBarStyled, NavContainer } from "./style";

interface NavBarProps {
  setValue: (event: any, newValue: string) => void;
  value: string;
}
export const NavBar: React.FC<NavBarProps> = ({ value, setValue }) => {
  return (
    <NavContainer>
      <NavBarStyled
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(event, newValue);
        }}
      >
        <BottomNavigationAction
          sx={{ color: "#fff" }}
          label="Characters"
          value="characters"
        />
        <BottomNavigationAction
          sx={{ color: "#fff" }}
          label="Comics"
          value="comics"
        />
        <BottomNavigationAction
          sx={{ color: "#fff" }}
          label="Events"
          value="events"
        />
        <BottomNavigationAction
          sx={{ color: "#fff" }}
          label="Series"
          value="series"
        />
      </NavBarStyled>
    </NavContainer>
  );
};
