import { Typography } from "@mui/material";
import { ParticipationCardProps } from "data/@types/Participation";
import React from "react";
import { CardContainer, HeroName, ImageContainer } from "./style";

export const ParticipationCard: React.FC<ParticipationCardProps> = ({
  title,
  thumbnail,
  onClick,
}) => {
  return (
    <CardContainer onClick={onClick}>
      <ImageContainer>
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
      </ImageContainer>
      <HeroName>
        <Typography variant="body2">{title}</Typography>
      </HeroName>
    </CardContainer>
  );
};
