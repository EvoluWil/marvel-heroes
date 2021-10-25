import { styled } from "@mui/material/styles";
import { Link } from "@mui/material";

export const LinkStyled = styled(Link)`
  text-decoration: none;
  width: 100%;
  color: ${({ theme }) => theme.palette.text.primary} !important;
`;
