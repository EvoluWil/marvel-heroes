import { BottomNavigation, styled } from "@mui/material";

export const NavContainer = styled("div")`
  width: 100%;
  background: transparent;
`;
export const NavBarStyled = styled(BottomNavigation)`
  width: 100%;
  background: ${({ theme }) => theme.palette.secondary.main};
  border-radius: 0 0 ${({ theme }) => theme.spacing(3) + " " + theme.spacing(3)};
`;
