import React from "react";
import { HeaderAppBar, HeaderBanner, HeaderLogo } from "./style";
import { Toolbar, Container } from "@mui/material";
import { NavBar } from "../NavBar";

export const Header: React.FC = () => {
  return (
    <HeaderAppBar position={"sticky"} sx={{ background: "transparent" }}>
      <Toolbar>
        <HeaderBanner src={"/banner.png"} alt={"Marvel-Heroes"} />
        <HeaderLogo src="/logo-o.png" />
      </Toolbar>
      <NavBar />
    </HeaderAppBar>
  );
};
