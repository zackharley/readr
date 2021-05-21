import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Viewer from './Viewer';

function ViewerContainer() {
  const [article, setArticle] = useState(null);
  const { articleId } = useParams();
  useEffect(() => {
    async function fetchArticle() {
      const querystring = new URLSearchParams({ articleId });
      const response = await fetch(
        `/api/get-article?${querystring.toString()}`
      );
      const { article } = await response.json();
      setArticle(article);
    }
    fetchArticle();
  }, [articleId]);
  return <Viewer article={article} isReadingList={true} />;
}

export default ViewerContainer;
