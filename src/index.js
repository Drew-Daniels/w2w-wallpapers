// import components
// react
import React from 'react';
import ReactDOM from 'react-dom/client';
// react-router-dom
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// my components
import App from './App';
import { Browser } from './routes/Browser/Browser'
import {Items} from './routes/Items/Items';
import {Item} from './routes/Item/Item';
// import styling
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path ='/' element={<App /> }>
          <Route index element={<Browser />} />
          <Route path='shop' element ={<Items />} />
          <Route path='shop/:id' element={<Item /> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
