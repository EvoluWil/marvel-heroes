import { Typography } from "@mui/material";
import { CharacterCardProps } from "data/@types/Character";
import React from "react";
import { NavDetail } from "../NavDetails";
import { Title } from "../Title";
import { CardContainer, HeroImage, HeroName, StatsContainer } from "./style";

export const CharacterDetailCard: React.FC<CharacterCardProps> = ({
  comics,
  events,
  name,
  series,
  stories,
  thumbnail,
  description,
  onClick,
}) => {
  return (
    <main>
      <CardContainer onClick={onClick}>
        <HeroImage>
          <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
        </HeroImage>
        <div>
          <Title title={name} subtitle={description}></Title>
        </div>
      </CardContainer>
    </main>
  );
};
