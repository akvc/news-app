import { ArticleObj } from '../HomePage/HomePage';
import { database, auth } from '../../firebaseConfig';
import { ref, push } from 'firebase/database';

export interface ArticleProps {
  signedIn: boolean;
  article: ArticleObj;
  key: string;
}

export const Article = ({ article, signedIn }: ArticleProps) => {
  //Add article to bookmarks function
  //reference to db

  const writeArticleData = (article: ArticleObj) => {
    if (signedIn && auth.currentUser) {
      const dbRef = ref(
        database,
        'user/' + auth.currentUser.uid + '/bookmarks/'
      );
      push(dbRef, {
        title: article.title,
        urlToImage: article.urlToImage,
        url: article.url,
      });
    }
  };
  return (
    <div className="card" style={{ width: '32rem' }}>
      {signedIn && (
        <button
          className="btn btn-primary position-absolute top-0 end-0 m-1"
          onClick={() => {
            writeArticleData(article);
          }}
        >
          <i className="bi bi-bookmark-plus"></i>
        </button>
      )}

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
