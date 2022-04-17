import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import { SiteReviews } from './routes/SiteReviews/SiteReviews'
import {Items} from './routes/Items/Items';
import {Item} from './routes/Item/Item';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path ='/' element={<App /> }>
          <Route index element={<SiteReviews />} />
          <Route path='shop' element ={<Items />} />
          <Route path='shop/:id' element={<Item /> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
