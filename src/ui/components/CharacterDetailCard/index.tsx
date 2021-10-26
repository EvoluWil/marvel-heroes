import { CharacterCardProps } from "data/@types/Character";
import React from "react";
import { Title } from "../Title";
import { CardContainer, HeroImage } from "./style";

export const CharacterDetailCard: React.FC<CharacterCardProps> = ({
  name,
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
