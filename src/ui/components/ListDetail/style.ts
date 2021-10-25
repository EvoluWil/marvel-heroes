import { Card, styled, TextField } from "@mui/material";

export const CardContainer = styled(Card)`
  position: relative;
  display: grid;
  grid-template-columns: 200px 1fr;
  height: 270px;
  width: 100%;
  background: ${({ theme }) => theme.palette.primary.main};
  border-radius: ${({ theme }) => theme.spacing(3)} 0 0;

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    height: 540px;
  }
`;

export const HeroImage = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: ${({ theme }) => theme.spacing(3)} 0 0;
  overflow: hidden;

  img {
    height: 270px;
    border-radius: ${({ theme }) => theme.spacing(3)} 0 0;
    transition: height 0.8s;

    &:hover {
      height: 276px;
    }
  }
`;

export const HeroName = styled("div")`
  width: 100%;
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);

  h2 {
    text-align: center;
    margin: 0;
  }
`;

export const StatsContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: ${({ theme }) => theme.spacing(1)} 0;
  border-radius: 0 0 ${({ theme }) => theme.spacing(3)} 0;
  border: 2px solid ${({ theme }) => theme.palette.primary.main};

  h6 {
    margin: ${({ theme }) => theme.spacing(1)};
  }
`;
