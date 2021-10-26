import * as React from "react";
import { BottomNavigationAction } from "@mui/material";
import { NavBarStyled, NavContainer } from "./style";

interface NavDetailProps {
  value: string;
  setValue: (event: any, value: string) => void;
}
export const NavDetail: React.FC<NavDetailProps> = ({ value, setValue }) => {
  return (
    <NavContainer>
      <NavBarStyled showLabels value={value} onChange={setValue}>
        <BottomNavigationAction
          label="Comics"
          value={"comics"}
          sx={{ color: "#fff" }}
        />
        <BottomNavigationAction
          label="Events"
          value={"events"}
          sx={{ color: "#fff" }}
        />
        <BottomNavigationAction
          label="Series"
          value={"series"}
          sx={{ color: "#fff" }}
        />
      </NavBarStyled>
    </NavContainer>
  );
};
