import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={667} width={375} />
);

const LoadableHome = Loadable({
  loader: () => import('./components/Home'),
  loading: Loading
});

const LoadableAbout = Loadable({
  loader: () => import('./components/About'),
  loading: Loading
});

const LoadableTopics = Loadable({
  loader: () => import('./components/Topics'),
  loading: Loading
});

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={LoadableHome} />
      <Route path="/about" component={LoadableAbout} />
      <Route path="/topics" component={LoadableTopics} />
    </div>
  </Router>
);
export default BasicExample;
