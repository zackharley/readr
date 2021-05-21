import React, { useEffect, useState } from 'react';
import Viewer from './Viewer';

function ReadTogetherContainer() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchArticles() {
      setIsLoading(true);
      const response = await fetch('/api/list-articles');
      const { articles: nextArticles } = await response.json();
      setArticles(nextArticles);
      setIsLoading(false);
    }
    fetchArticles();
  }, []);
  return (
    <div>
      {articles.map((article) => (
        <Viewer key={article._id} article={article} isLoading={isLoading} />
      ))}
    </div>
  );
}

export default ReadTogetherContainer;
