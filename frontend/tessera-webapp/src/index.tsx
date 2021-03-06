import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NewPostPage from './Pages/newpost';
import UnknownURLPage from './Pages/unknownurl';
import ProfilePage from './Pages/profile';
import FeedPage from './Pages/feed';
import PostPage from './Pages/postpage';
import RegisterPage from './Pages/registerPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="feed" element={<FeedPage />}>
            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path="profile/:id" element={<ProfilePage />} />

          <Route path="newpost" element={<NewPostPage />} />
          <Route path="*" element={<UnknownURLPage />} />
          <Route path="register" element={<RegisterPage />} />
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