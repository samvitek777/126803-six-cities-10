import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {points} from './mocks/points';
import {cityPoint} from './mocks/points';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App placesCount={offers.length} offers={offers} points={points} cityPoint={cityPoint}/>
  </React.StrictMode>,
);
