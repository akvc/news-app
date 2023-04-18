import './HomePage.css';
import { Article } from '../Article/Article';
import { API_KEY } from '../../helpers/helpers';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';

export interface ArticleObj {
  title: string;
  urlToImage: string;
  url: string;
  description: string;
}

export const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [keyword, setKeyword] = useState('world');

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
        `https://newsapi.org/v2/everything?q=${keyword}&from=${date}&language=en&sortBy=popularity&apiKey=${API_KEY}`
      )
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => console.log('Error'));
  }, [keyword]);

  return (
    <div className="mx-5 p-4">
      <SearchBar setKeyword={setKeyword} />
      <h2 className="my-4">
        {keyword === 'world'
          ? `Today's news:`
          : `Today's news about '${keyword}':`}
      </h2>
      <div className="articles-display mx-5 p-5">
        {articles.length > 0 &&
          articles.map((article: ArticleObj) => {
            return <Article article={article} key={article.title} />;
          })}
      </div>
    </div>
  );
};
