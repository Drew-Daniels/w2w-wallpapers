import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, HashRouter } from 'react-router-dom';
import App from './App';
import { SiteReviews } from './routes/SiteReviews/SiteReviews'
import {Items} from './routes/Items/Items';
import {NotFound} from './routes/NotFound/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter basename='/w2w-wallpapers'>
      <Routes>
        <Route path ='/' element={<App /> }>
          <Route exact index element={<SiteReviews />} />
          <Route path='shop' element ={<Items />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
