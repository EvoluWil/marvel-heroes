import { styled } from "@mui/material/styles";
import { AppBar } from "@mui/material";

export const HeaderAppBar = styled(AppBar)`
  position: relative;

  .MuiToolbar-root {
    height: auto;
    padding: 0;
  }
`;

export const HeaderLogo = styled("img")`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
`;

export const HeaderBanner = styled("img")`
  width: 100vw;
  border-radius: 4px;
  box-shadow: 4px 4px 4px rgba(255, 255, 255, 0.05);
`;
