import { BottomNavigation, styled } from "@mui/material";

export const NavContainer = styled("div")`
  width: 100%;
  background: transparent;
`;
export const NavBarStyled = styled(BottomNavigation)`
  padding: 0 ${({ theme }) => theme.spacing(3)};
  border-radius: 0 0 ${({ theme }) => theme.spacing(3) + " " + theme.spacing(3)};
  background: ${({ theme }) => theme.palette.secondary.main};
  overflow: hidden;

  button {
    margin-top: ${({ theme }) => theme.spacing(1)};
    min-width: 70px;
  }
`;
