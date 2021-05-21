import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiFullscreenLine, RiFullscreenExitLine } from 'react-icons/ri';
import screenfull from 'screenfull';
import './Dashboard.css';

function Dashboard(props) {
  const [isFullScreen, setIsFullScreen] = useState();
  useEffect(() => {
    screenfull.onchange(() => {
      setIsFullScreen(screenfull.isFullscreen);
    });
  });
  const fullScreenElement = isFullScreen ? (
    <RiFullscreenExitLine
      className="icon pointer"
      onClick={() => screenfull.exit()}
    />
  ) : (
    <RiFullscreenLine
      className="icon pointer"
      onClick={() => screenfull.request()}
    />
  );
  return (
    <div>
      <header className="header">
        <div>
          <Link to="/" className="logo">
            <span>Readr</span>
          </Link>
        </div>
        <div>{screenfull.isEnabled ? fullScreenElement : ''}</div>
      </header>
      <div className="dashboard-content">{props.children}</div>
    </div>
  );
}

export default Dashboard;
