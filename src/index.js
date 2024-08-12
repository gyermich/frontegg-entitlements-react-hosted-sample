import './index.css';

// For react 18: import ReactDOM from 'react-dom/client';
import App from './App';
import { FronteggProvider } from '@frontegg/react';
import React from 'react';
import ReactDOM from 'react-dom'; // For react 17

const contextOptions = {
  baseUrl: 'https://app-k4qik94aul5b.us.frontegg.com',
  clientId: '2ad54ecb-c5b6-4bf0-946c-45ece4cc3f6f',
  hostedLoginOptions: {
        loadUserOnFirstLoad: true,
    },
};


const authOptions = {
  keepSessionAlive: true,
  // routes: { hostedLoginRedirectUrl: `${process.env.UI_PATH_PREFIX}/oauth/callback` },

};

// For react 18:
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
ReactDOM.render(
    <FronteggProvider
      contextOptions={contextOptions}
      hostedLoginBox={true}
      authOptions={authOptions}
    // history={history}
    >
        <App />
    </FronteggProvider>,
    document.getElementById('root')
);