import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
// import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// ReactDOM.render(
//   <GoogleOAuthProvider clientId="437772916787-38ovvus3gn9v06k1ojaag49268bg7m37.apps.googleusercontent.com">
//       <StrictMode>
//           <App />
//       </StrictMode>
//   </GoogleOAuthProvider>,
//   document.getElementById('root')
// );
