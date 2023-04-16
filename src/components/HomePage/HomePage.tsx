import { Article } from '../Article/Article';
import { API_KEY } from '../../helpers/helpers';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './HomePage.css';

export interface ArticleObj {
  title: string;
  urlToImage: string;
  url: string;
  description: string;
}

export const HomePage = () => {
  const [todaysArticles, setTodaysArticles] = useState([]);

  useEffect(() => {
    const today = new Date();
    const day =
      today.getDate() - 1 < 10
        ? `0${today.getDate() - 1}`
        : today.getDate() - 1;
    const month =
      today.getMonth() + 1 < 10
        ? `0${today.getMonth() + 1}`
        : today.getMonth() + 1;
    const year = today.getFullYear();
    const date = `${year}-${month}-${day}`;

    axios
      .get(
        `https://newsapi.org/v2/everything?q=world&from=${date}&language=en&sortBy=popularity&apiKey=${API_KEY}`
      )
      .then((response) => {
        setTodaysArticles(response.data.articles);
      })
      .catch((error) => console.log('Error'));
  }, []);

  return (
    <>
      <h2>Today's news: </h2>
      <div className="articles-display">
        {todaysArticles.length !== 0 &&
          todaysArticles.map((article: ArticleObj) => {
            return <Article article={article} key={article.title} />;
          })}
      </div>
    </>
  );
};
