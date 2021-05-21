import React, { useEffect, useState } from 'react';
import ReadingList from './ReadingList';

function ReadingListContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [readingList, setReadingList] = useState([]);
  useEffect(() => {
    async function fetchReadingList() {
      setIsLoading(true);
      const response = await fetch('/api/list-articles');
      const { articles } = await response.json();
      setReadingList(articles);
      setIsLoading(false);
    }
    fetchReadingList();
  }, []);
  return <ReadingList readingList={readingList} isLoading={isLoading} />;
}

export default ReadingListContainer;
