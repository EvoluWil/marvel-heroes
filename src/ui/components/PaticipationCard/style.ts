import { Card, styled } from "@mui/material";

export const CardContainer = styled(Card)`
  position: relative;
  text-align: center;
  height: 270px;
  width: 200px;
  background: ${({ theme }) => theme.palette.primary.main};
  border-radius: ${({ theme }) => theme.spacing(3)} 0;
  cursor: pointer;
`;

export const ImageContainer = styled("div")`
  height: 270px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: cover;
    width: 100%;
    min-height: 100%;
    border-radius: ${({ theme }) => theme.spacing(3)} 0 0;
    transition: height 0.8s;

    &:hover {
      height: 110%;
      width: 110%;
    }
  }
`;

export const HeroName = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  overflow: hidden;
  text-overflow: clip ellipsis;
  min-height: ${({ theme }) => theme.spacing(8)};
  max-height: ${({ theme }) => theme.spacing(10)};
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
