import { Typography } from "@mui/material";
import React from "react";
import { CardContainer, HeroImage, HeroName, StatsContainer } from "./style";

export const HeroCard = () => {
  return (
    <CardContainer>
      <HeroImage>
        <img
          src="http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0.jpg"
          alt="Will"
        />
        <HeroName>
          <h2>Hulk</h2>
        </HeroName>
      </HeroImage>
      <StatsContainer>
        <div>
          <Typography variant="body2">
            <strong> Comics</strong>
          </Typography>
          <Typography variant="body2">2457</Typography>
        </div>
        <div>
          <Typography variant="body2">
            <strong>Series</strong>
          </Typography>
          <Typography variant="body2">2457</Typography>
        </div>
        <div>
          <Typography variant="body2">
            <strong>Stories</strong>
          </Typography>
          <Typography variant="body2">2457</Typography>
        </div>
        <div>
          <Typography variant="body2">
            <strong>Events</strong>
          </Typography>
          <Typography variant="body2">2457</Typography>
        </div>
      </StatsContainer>
    </CardContainer>
  );
};
