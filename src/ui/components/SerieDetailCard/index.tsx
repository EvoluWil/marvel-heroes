import { Typography } from "@mui/material";
import { SerieCardProps } from "data/@types/Serie";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { Title } from "../Title";
import { CardContainer, HeroImage, ParticipationContainer } from "./style";

export const SerieDetailCard: React.FC<SerieCardProps> = ({
  title,
  description,
  thumbnail,
  creators,
  characters,
}) => {
  const route = useRouter();

  const handleClick = (fullUrl) => {
    const [, url] = fullUrl.split("public");
    route.push(`${url}`);
  };

  return (
    <>
      <CardContainer>
        <HeroImage>
          <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
        </HeroImage>
        <div>
          <Title title={title} subtitle={description}></Title>
        </div>
      </CardContainer>
      <ParticipationContainer>
        <div>
          <Typography
            align="center"
            variant="h6"
            color="primary"
            sx={{ my: 2 }}
          >
            Characters
          </Typography>

          <ul>
            {!characters.items.length ? (
              <li>
                <Typography>Nothing here</Typography>
              </li>
            ) : (
              characters.items.map((character, index) => (
                <li
                  key={index}
                  onClick={() => handleClick(character.resourceURI)}
                >
                  <Typography>{character.name}</Typography>
                </li>
              ))
            )}
          </ul>
        </div>
        <div>
          <Typography
            variant="h6"
            color="primary"
            align="center"
            sx={{ my: 2 }}
          >
            Creators
          </Typography>
          <ul>
            {!creators.items.length ? (
              <li>
                <Typography>Nothing here</Typography>
              </li>
            ) : (
              creators.items.map((creator, index) => (
                <li key={index}>
                  <Typography color={"#fff"}>{creator.name}</Typography>
                  <Typography color={"InfoText"}>as {creator.role}</Typography>
                </li>
              ))
            )}
          </ul>
        </div>
      </ParticipationContainer>
    </>
  );
};
