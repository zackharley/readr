import React from 'react';
import Spinner from 'react-spinkit';
import { format } from 'date-fns';
import './Viewer.css';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
} from 'react-icons/md';
import ReactTooltip from 'react-tooltip';

function Viewer(props) {
  const { article, isLoading } = props;
  if (isLoading || !article) {
    return (
      <div>
        <Spinner name="three-bounce" />
      </div>
    );
  }
  return (
    <div className="viewer-container">
      <h1>{article.title}</h1>
      <div className="viewer-subtitle-container">
        <div className="viewer-metadata-container">
          <p>{format(article.datePublished, 'MM/dd/yyyy')}</p>
          {article.author ? (
            <>
              <span>|</span>
              <p>{article.author}</p>
            </>
          ) : (
            ''
          )}
          <span>|</span>
          <a
            href={props.url}
            className="viewer-metadata-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {article.domain}
          </a>
        </div>

        <div>
          {props.isRead ? (
            <MdCheckBox
              className="icon pointer"
              data-tip="Mark this article as unread"
            />
          ) : (
            <MdCheckBoxOutlineBlank
              className="icon pointer"
              data-tip="Mark this article as read"
            />
          )}
        </div>
        <ReactTooltip />
      </div>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
}

export default Viewer;
