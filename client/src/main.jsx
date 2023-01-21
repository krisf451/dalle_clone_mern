import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
// import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <GoogleOAuthProvider clientId={`${import.meta.env.GOOGLE_CLIENT_ID}`}> */}
    <Router>
      <App />
    </Router>
    {/* </GoogleOAuthProvider> */}
  </React.StrictMode>,
);
