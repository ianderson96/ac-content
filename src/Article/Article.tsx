import React from "react";
import { Element, MainImageElement } from "../types";
import { baseUrl } from "../strings";
import { format } from "date-fns";
import { vars } from '../styles';
import styled from "styled-components";

// All fields except mainImage are required.
export interface ArticleProps {
  heading: Element;
  author: Element;
  body: Element;
  date: Element;
  mainImage?: MainImageElement;
}

function RenderBody(props: { elements: Array<string> }) {
  const { elements } = props;
  const html = elements.reduce((acc, e) => acc + e);
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}

function RenderArticle(props: ArticleProps) {
  const { heading, author, body, date, mainImage } = props;
  const mainImageUrl = mainImage && mainImage.value.leadImage.renditions.lead.url;
  const mainImageCaption = mainImage && mainImage.value.leadImageCaption.value
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <ArticleWrapper>
        <h1>{heading.value}</h1>
        {mainImage && 
        <>
        <MainImage
          src={baseUrl + mainImageUrl}
          alt={mainImageCaption}
          aria-describedby={mainImageCaption}
        />
        <MainImageCaption>{mainImageCaption}</MainImageCaption>
        </>
        }
        <Author>Written by {author.value}</Author>
        {date.value && (
          <DateP>{format(new Date(date.value), "MMMM do, yyyy @ haaa")}</DateP>
        )}
        <Divider/>
        {body.values && <RenderBody elements={body.values} />}
      </ArticleWrapper>
    </div>
  );
}

const ArticleWrapper = styled.article`
  max-width: ${vars.maxWidth};
  padding: 2em 1em;
`;

const MainImage = styled.img`
  width: 100%;
`;

const MainImageCaption = styled.p`
  text-align: center;
  font-style: italic;
  margin-top: 0.5em;
`;

const Author = styled.p`
  margin-top: 2em;
  margin-bottom: 0.25em;
`;

const DateP = styled.p`
  margin-top: 0;
`;

const Divider = styled.div`
  height: 2px;
  width: 100%;
  background: ${vars.gradient};
  margin-bottom: 3em;
`;

export default RenderArticle;
