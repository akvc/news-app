import './BookmarksPage.css';
import { Article } from '../Article/Article';
import { ArticleObj } from '../HomePage/HomePage';
import { auth, database } from '../../firebaseConfig';
import { ref, onValue, remove } from 'firebase/database';
import { useState, useEffect, useContext } from 'react';
import { authContext } from '../../helpers/authContext';

export const BookmarksPage = () => {
  const [articles, setArticles] = useState<ArticleObj[]>();
  const signedIn = useContext(authContext);

  useEffect(() => {
    if (signedIn && auth.currentUser) {
      //db reference
      const dbRef = ref(
        database,
        'user/' + auth.currentUser.uid + '/bookmarks/'
      );

      onValue(dbRef, (snapshot) => {
        if (snapshot.val()) {
          const data = Object.values<ArticleObj>(snapshot.val());
          setArticles(data);
        }
      });
    }
  }, [signedIn]);

  const deleteBookmarkData = () => {
    if (signedIn && auth.currentUser) {
      //db reference
      const dbRef = ref(
        database,
        'user/' + auth.currentUser.uid + '/bookmarks/'
      );
      remove(dbRef).then(() => {
        console.log('Bookmarks removed');
        setArticles([]);
      });
    }
  };

  return (
    <>
      {signedIn && auth.currentUser && (
        <div>
          <header className="mx-5">
            <h1 className="m-4 p-2">Bookmarks page</h1>
            {articles && articles.length > 0 ? (
              <button
                className="btn btn-primary mt-4 p-2"
                onClick={deleteBookmarkData}
              >
                Clear your bookmarks
              </button>
            ) : (
              <p className="mt-4 p-2">You have no bookmarks</p>
            )}
          </header>
          <div className="articles-display mx-5 p-5">
            {articles !== undefined &&
              articles.map((article: ArticleObj) => {
                return (
                  <div className="article-card">
                    <Article article={article} key={article.title} />
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};
