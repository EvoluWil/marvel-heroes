import { styled } from "@mui/material/styles";

export const IndexContainer = styled("main")`
  margin-top: -15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardListContainer = styled("ul")`
  display: grid;
  width: auto;
  gap: ${({ theme }) => theme.spacing(4)};
  grid-template-columns: repeat(5, 1fr);
  z-index: 1;
  padding: 0 auto;

  ${({ theme }) => theme.breakpoints.down("lg")} {
    grid-template-columns: repeat(4, 1fr);
    overflow-x: auto;
    width: 100%;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: repeat(20, 1fr);
    overflow-x: auto;
    width: 90%;
  }
`;

export const AvengerContainer = styled("section")`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    position: absolute;
    height: 100%;
    z-index: 0;
  }
`;
