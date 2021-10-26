import { Card, styled } from "@mui/material";

export const CardContainer = styled(Card)`
  position: relative;
  display: grid;
  grid-template-columns: 300px 1fr;
  width: 100%;
  background: ${({ theme }) => theme.palette.primary.main};
  border-radius: ${({ theme }) => theme.spacing(3)} 0 0;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(2)};
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
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
    height: 400px;
    min-width: 300px;
    border-radius: ${({ theme }) => theme.spacing(3)} 0 0;
    transition: height 0.8s;
    object-fit: cover;
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
