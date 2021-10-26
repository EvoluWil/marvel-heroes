import React from "react";
import {
  PageTitleContainer,
  PageTitleStyled,
  PageSubtitleStyled,
} from "./style";

interface PageTitleProps {
  title: string;
  subtitle?: string | JSX.Element;
  style?: any;
}

export const Title: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled style={props.style}>{props.title}</PageTitleStyled>
      <PageSubtitleStyled>{props.subtitle}</PageSubtitleStyled>
    </PageTitleContainer>
  );
};
