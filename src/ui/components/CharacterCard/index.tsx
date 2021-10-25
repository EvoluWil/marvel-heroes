import { Typography } from "@mui/material";
import { CharacterCardProps } from "data/@types/Character";
import React from "react";
import { CardContainer, HeroImage, HeroName, StatsContainer } from "./style";

export const CharacterCard: React.FC<CharacterCardProps> = ({
  comics,
  events,
  name,
  series,
  stories,
  thumbnail,
  onClick,
}) => {
  return (
    <CardContainer onClick={onClick}>
      <HeroImage>
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
        <HeroName>
          <h2>{name}</h2>
        </HeroName>
      </HeroImage>
      <StatsContainer>
        <div>
          <Typography variant="body2">
            <strong> Comics</strong>
          </Typography>
          <Typography variant="body2">{comics.available}</Typography>
        </div>
        <div>
          <Typography variant="body2">
            <strong>Series</strong>
          </Typography>
          <Typography variant="body2">{series.available}</Typography>
        </div>
        <div>
          <Typography variant="body2">
            <strong>Stories</strong>
          </Typography>
          <Typography variant="body2">{stories.available}</Typography>
        </div>
        <div>
          <Typography variant="body2">
            <strong>Events</strong>
          </Typography>
          <Typography variant="body2">{events.available}</Typography>
        </div>
      </StatsContainer>
    </CardContainer>
  );
};
