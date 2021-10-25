import { styled } from "@mui/material/styles";

export const Container404 = styled("div")`
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing(4)};
  margin-bottom: -${({ theme }) => theme.spacing(1)};
  height: 380px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    justify-content: center;
    height: 500px;
  }
`;
