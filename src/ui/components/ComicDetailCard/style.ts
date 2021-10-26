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
    object-fit: cover;
    height: 400px;
    min-width: 300px;
    border-radius: ${({ theme }) => theme.spacing(3)} 0 0;
    transition: height 0.8s;
  }
`;

export const ParticipationContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: top;
  justify-content: space-around;
  border-radius: 0 0 ${({ theme }) => theme.spacing(3)} 0;
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  background: ${({ theme }) => theme.palette.secondary.main};
  max-height: 500px;
  overflow: auto;

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    text-align: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing(1)};
  }
`;
