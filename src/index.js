import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import { SiteReviews } from './routes/SiteReviews/SiteReviews'
import {Items} from './routes/Items/Items';
import {Item} from './routes/Item/Item';
import {NotFound} from './routes/NotFound/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path ='/w2w-wallpapers' element={<App /> }>
          <Route index element={<SiteReviews />} />
          <Route path='shop' element ={<Items />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
