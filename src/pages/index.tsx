import { CircularProgress, Typography } from "@mui/material";
import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";

const Home = () => {
  const route = useRouter();
  useEffect(() => {
    route.push("characters");
  }, []);
  return (
    <Typography align="center" sx={{ my: 10 }}>
      <CircularProgress color="secondary" />
    </Typography>
  );
};

export default Home;
