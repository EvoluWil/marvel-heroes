import { Card, styled } from "@mui/material";

export const CardContainer = styled(Card)`
  text-align: center;
  height: 270px;
  width: 200px;
  background: ${({ theme }) => theme.palette.primary.main};
  border-radius: ${({ theme }) => theme.spacing(3)} 0;
  cursor: pointer;
`;

export const HeroImage = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: ${({ theme }) => theme.spacing(3)} 0 0;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    min-height: 100%;
    border-radius: ${({ theme }) => theme.spacing(3)} 0 0;
    transition: width 0.8s;

    &:hover {
      width: 130%;
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
  grid-template-columns: repeat(3, 1fr);
  padding: ${({ theme }) => theme.spacing(1)} 0;
  border-radius: 0 0 ${({ theme }) => theme.spacing(3)} 0;
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  h6 {
    margin: ${({ theme }) => theme.spacing(1)};
  }
`;
