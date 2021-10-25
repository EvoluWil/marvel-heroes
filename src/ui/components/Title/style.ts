import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PageTitleContainer = styled(Container)`
  margin: ${({ theme }) => theme.spacing(8)} 0;
  width: 100%;
  text-align: left;
`;

export const PageTitleStyled = styled("h2")`
  margin: 0;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: 600;
  position: relative;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
  }

  ::before,
  ::after {
    background-color: #c6a972;
    content: "";
    display: block;
    height: 2px;
    position: absolute;
    -webkit-transform: rotate(-45deg) skewX(45deg);
    transform: rotate(-45deg) skewX(45deg);
    width: 20px;
  }

  ::before {
    left: 53px;
    top: -8px;
    transform-origin: left bottom;
  }

  ::after {
    left: -6px;
    top: calc(100% + 3px);
    transform-origin: right top;
  }
`;

export const PageSubtitleStyled = styled("h3")`
  margin: ${({ theme }) => theme.spacing(2)} 0;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: normal;
  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
  }
`;
