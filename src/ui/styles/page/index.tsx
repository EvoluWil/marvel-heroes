import { styled } from "@mui/material/styles";

export const IndexContainer = styled("div")`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const CardListContainer = styled("ul")`
  display: grid;
  width: 80%;
  gap: ${({ theme }) => theme.spacing(4)};
  grid-template-columns: repeat(4, 1fr);

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: repeat(20, 1fr);
    overflow-x: auto;
    width: 80%;
  }
`;
