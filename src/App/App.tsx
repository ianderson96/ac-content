import React, { useState } from 'react';
import fetch, {Response} from 'node-fetch';
import { baseUrl, articleUrl } from '../strings';
import { Article } from '../types';
import RenderArticle from '../Article/Article';
import Header from '../Header';
import styled from 'styled-components';
import './App.css';

function App() {
  const [article, setArticle] = useState<Article | undefined>(undefined);
  const [apiResponded, setApiResponded] = useState(false);
  React.useEffect(() => {
    try {
      (async function fetchArticle() {
        const res: Response = await fetch(`${baseUrl}${articleUrl}`);
        const fetchedArticle: Article = await res.json();
        setApiResponded(true);
        setArticle(fetchedArticle);
      })();
    } catch (err) {
      // Would want to log this error somewhere other than the browser
      console.error(err);
    }
  }, []);

  const errorMessage = <FullScreenWrapper><h2>The article you are looking for was not found.</h2></FullScreenWrapper>

  const loadingState = <FullScreenWrapper><h2>Loading...</h2></FullScreenWrapper>

  return (
    <div>
      <Header />
      {article && apiResponded ? 
      <RenderArticle
        heading={article.elements.heading}
        author={article.elements.author}
        body={article.elements.body}
        date={article.elements.date}
        mainImage={article.elements.mainImage}
    // if there is no article after api response, show error state
    /> : !article && apiResponded ? errorMessage : loadingState} 
    </div>
  );
}

const FullScreenWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default App;
