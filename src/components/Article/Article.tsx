import { ArticleObj } from '../HomePage/HomePage';

export interface ArticleProps {
  article: ArticleObj;
  key: string;
}

export const Article = ({ article }: ArticleProps) => {
  return (
    <div className="card" style={{ width: '30rem' }}>
      <img
        src={article.urlToImage}
        className="card-img-top"
        alt={article.title}
      />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.description}</p>
        <hr></hr>
        <a href={article.url} className="btn btn-primary" target="__blank">
          Read more
        </a>
      </div>
    </div>
  );
};
