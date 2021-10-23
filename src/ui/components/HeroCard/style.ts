import { Card, styled, TextField } from "@mui/material";
import theme from "ui/themes/theme";

export const CardContainer = styled(Card)`
  text-align: center;

  height: 260px;
  width: 200px;
  background: ${({ theme }) => theme.palette.primary.main};
  border-radius: ${({ theme }) => theme.spacing(3)} 0;
`;

export const HeroImage = styled("div")`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  max-height: 200px;
  border: 2px solid ${({ theme }) => theme.palette.secondary.main};
  border-radius: ${({ theme }) => theme.spacing(3)} 0 0;
  overflow: hidden;

  img {
    width: 120%;
    border-radius: ${({ theme }) => theme.spacing(3)} 0 0;

    &:hover {
      width: 130%;
    }
  }
`;

export const HeroName = styled("div")`
  height: 38px;
  width: 100%;
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 2px;
  border-radius: 0 0 0 ${({ theme }) => theme.spacing(2)};
  background: rgba(0, 0, 0, 0.6);

  h2 {
    text-align: center;
    margin: 0;
  }
`;

export const StatsContainer = styled("div")`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: ${({ theme }) => theme.spacing(1)} 0;
  background: ${({ theme }) => theme.palette.primary.main};

  h6 {
    margin: ${({ theme }) => theme.spacing(1)};
  }
`;
