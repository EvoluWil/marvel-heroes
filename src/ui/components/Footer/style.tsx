import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";

export const FooterStyled = styled("footer")`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) =>
    theme.palette.getContrastText(theme.palette.primary.main)};
  padding-top: ${({ theme }) => theme.spacing(4)};
  margin-top: auto;
  border-radius: ${({ theme }) => theme.spacing(3) + " " + theme.spacing(3)} 0 0;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: ${({ theme }) => theme.spacing(5)};
  }
`;

export const AppList = styled("ul")`
  display: flex;
  list-style-type: none;
  padding: 0;
  gap: ${({ theme }) => theme.spacing()};
  img {
    height: 30px;
    transition: height 0.2s;
    &:hover {
      height: 32px;
    }
  }
`;

export const MentionOfRights = styled("div")`
  width: 100%;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  transition: color 0.4s;
  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const FooterTitle = styled((props) => (
  <Typography component={"h2"} variant={"body2"} {...props} />
))`
  font-weight: bold;
`;
