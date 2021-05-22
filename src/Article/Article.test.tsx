import React from 'react';
import { render, screen } from '@testing-library/react';
import RenderArticle from './Article';
import { testArticle } from '../testData';

const article = testArticle;

describe("Article component", () => {
test('Renders article header', () => {
  render(<RenderArticle
    heading={article.elements.heading}
    author={article.elements.author}
    body={article.elements.body}
    date={article.elements.date}
    mainImage={article.elements.mainImage}
    />);
    const headerElement = screen.getByText(/Top article title/i);
    expect(headerElement).toBeInTheDocument();
});

test('Renders article author name', () => {
    render(<RenderArticle
      heading={article.elements.heading}
      author={article.elements.author}
      body={article.elements.body}
      date={article.elements.date}
      mainImage={article.elements.mainImage}
      />);
      const authorElement = screen.getByText(/John Doe/i);
      expect(authorElement).toBeInTheDocument();
  });
  
  test('Renders multple article body elements', () => {
    render(<RenderArticle
      heading={article.elements.heading}
      author={article.elements.author}
      body={article.elements.body}
      date={article.elements.date}
      mainImage={article.elements.mainImage}
      />);
      const bodyElement1 = screen.getByText(/Hey there/i);
      const bodyElement2 = screen.getByText(/Lorem ipsum/i);
      expect(bodyElement1).toBeInTheDocument();
      expect(bodyElement2).toBeInTheDocument();
  });

  test('Renders article date in correct format', () => {
    render(<RenderArticle
      heading={article.elements.heading}
      author={article.elements.author}
      body={article.elements.body}
      date={article.elements.date}
      mainImage={article.elements.mainImage}
      />);
      const dateElement = screen.getByText(/September 6th, 2020 @ 6pm/i);
      expect(dateElement).toBeInTheDocument();
  });

  test('Renders main image if present, with alt tag', () => {
    render(<RenderArticle
      heading={article.elements.heading}
      author={article.elements.author}
      body={article.elements.body}
      date={article.elements.date}
      mainImage={article.elements.mainImage}
      />);
      const imageElement = screen.getByAltText(/Listen your voice/i);
      expect(imageElement).toBeInTheDocument();
  });
});

