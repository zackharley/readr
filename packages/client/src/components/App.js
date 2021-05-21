import React from 'react';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ViewerContainer from './ViewerContainer';
import ReadingListContainer from './ReadingListContainer';
import ReadTogetherContainer from './ReadTogetherContainer';

function App() {
  return (
    <Router>
      <main className="app-container">
        <Dashboard>
          <Switch>
            <Router path="/read/together" >
              <ReadTogetherContainer />
            </Router>
            <Route path="/read/:articleId">
              <ViewerContainer />
            </Route>
            <Route path="/">
              <ReadingListContainer />
            </Route>
          </Switch>
        </Dashboard>
      </main>
    </Router>
  );
}

export default App;
