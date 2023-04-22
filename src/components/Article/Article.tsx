import { ArticleObj } from '../HomePage/HomePage';

export interface ArticleProps {
  article: ArticleObj;
  key: string;
}

export const Article = ({ article }: ArticleProps) => {
  return (
    <div className="card" style={{ width: '32rem' }}>
      <button className="btn btn-primary position-absolute top-0 end-0 m-1">
        <i className="bi bi-bookmark-plus"></i>
      </button>
      <a
        href={article.url}
        className="text-decoration-none text-dark"
        target="__blank"
      >
        <img
          src={article.urlToImage === 'null' ? '' : article.urlToImage}
          className="card-img-top"
          alt={article.title}
        />
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
        </div>
      </a>
    </div>
  );
};
