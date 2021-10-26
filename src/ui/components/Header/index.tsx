import React from "react";
import { HeaderAppBar, HeaderBanner, HeaderLogo } from "./style";
import { Toolbar } from "@mui/material";
import { NavBar } from "../NavBar";
import { useRouter } from "next/dist/client/router";

export const Header: React.FC = () => {
  const [value, setValue] = React.useState("characters");
  const route = useRouter();

  const handleClick = (newValue: string) => {
    setValue(newValue);
    route.push(`/${newValue}`);
  };

  return (
    <HeaderAppBar position={"sticky"} sx={{ background: "transparent" }}>
      <Toolbar>
        <HeaderBanner src={"/capa.jpg"} alt={"Marvel-Heroes"} />
        <HeaderLogo src="/logo-o.png" />
      </Toolbar>
      <NavBar
        value={value}
        setValue={(event, newValue) => handleClick(newValue)}
      />
    </HeaderAppBar>
  );
};
