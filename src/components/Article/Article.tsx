import { ArticleObj } from '../HomePage/HomePage';
import { database, auth } from '../../firebaseConfig';
import { ref, push } from 'firebase/database';
import { useContext } from 'react';
import { authContext } from '../../helpers/authContext';

const newsImage = require('../../assets/news.png');
export interface ArticleProps {
  article: ArticleObj;
  key: string;
}

export const Article = ({ article }: ArticleProps) => {
  const signedIn = useContext(authContext);

  //Add article to bookmarks function
  const writeArticleData = (article: ArticleObj) => {
    if (signedIn && auth.currentUser) {
      //db reference
      const dbRef = ref(
        database,
        'user/' + auth.currentUser.uid + '/bookmarks/'
      );
      push(dbRef, {
        title: article.title,
        urlToImage: article.urlToImage,
        url: article.url,
      })
        .then(() => console.log('Pushed the data successfully'))
        .catch(() => console.error('Failed to push the data'));
    }
  };

  return (
    <div className="card w-100">
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
          src={article.urlToImage ? article.urlToImage : newsImage}
          className="card-img-top object-fit-cover"
          alt={article.title}
        />
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
        </div>
      </a>
    </div>
  );
};
