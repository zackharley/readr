import React from 'react';
import { Link } from 'react-router-dom';
import './ReadingList.css';

function ReadingList(props) {
  const readingList = props.readingList;
  const hasUrlList = readingList && readingList.length > 0;
  const urlList = hasUrlList ? (
    <ul>
      {readingList.map(
        (article) =>
          console.log(article) || (
            <li key={article.url}>
              <Link to={`/read/${article._id}`}>{article.title}</Link>
            </li>
          )
      )}
    </ul>
  ) : (
    <p>Add some things to read!</p>
  );
  return (
    <div className="reading-list-container">
      <div className="reading-list-header-container">
        <h1 className="reading-list-title">Your Reading List</h1>
        <div className="reading-list-divider" />
        <Link className="reading-list-read-together" to="/read/together">
          Read together
        </Link>
      </div>
      <section>{urlList}</section>
    </div>
  );
}

export default ReadingList;
