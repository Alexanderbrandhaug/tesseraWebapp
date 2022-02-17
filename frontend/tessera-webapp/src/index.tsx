import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import FeedPage from './Pages/feed';
import LogInPage from './Pages/logInPage';
import NewPostPage from './Pages/newpost';
import ProfilePage from './Pages/profile';
import UnknownURLPage from './Pages/unknownurl';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="feed" element={<FeedPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="newpost" element={<NewPostPage />} />
          <Route path="*" element={<UnknownURLPage />} />
          <Route path="" element={<LogInPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();