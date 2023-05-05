import { Article } from '../Article/Article';
import { ArticleObj } from '../HomePage/HomePage';
import { auth, database } from '../../firebaseConfig';
import { ref, onValue } from 'firebase/database';
import { useState, useEffect } from 'react';
import './BookmarksPage.css';

interface BookmarksPageProps {
  signedIn: boolean;
}

export const BookmarksPage = ({ signedIn }: BookmarksPageProps) => {
  const [articles, setArticles] = useState<ArticleObj[]>();

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

  return (
    <>
      {signedIn && auth.currentUser && (
        <div>
          <h1 className="m-4">Bookmarks page</h1>
          <div className="articles-display mx-5 p-5">
            {articles !== undefined &&
              articles.map((article: ArticleObj) => {
                return (
                  <div className="article-card">
                    <Article
                      article={article}
                      key={article.title}
                      signedIn={signedIn}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};
