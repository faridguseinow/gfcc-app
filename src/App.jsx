import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { GoogleLogin } from '@react-oauth/google';

import './App.scss';
import './reset.css';

// import { useState } from "react";
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { Paper, Switch } from '@mui/material';
// import { ThemeProvider, createTheme } from '@mui/material';

//Import Pages
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Price from './pages/Price';
import Maps from './pages/Maps';
import Profile from './pages/Profile';

//import layout
import Header from './layouts/Header';
import Footer from './layouts/Footer';

function App() {

  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // const [mode, setMode] = useState(prefersDarkMode);

  // const appTheme = createTheme({
  //   palette: {
  //     mode: mode ? "dark" : "light",
  //   }
  // });

  // const handleChange = () => {
  //   if (mode) {
  //     setMode(false);
  //   } else {
  //     setMode(true);
  //   }
  // };


// Google sign in

  // const responseMessage = (response) => {
  //   console.log(response);
  // };
  // const errorMessage = (error) => {
  //   console.log(error);
  // };

  return (
    <Router>
      <>
        <Header />

        {/* <ThemeProvider theme={appTheme}>
          <Paper elevation={0} sx={{ height: "100vh" }} square>
            <h1>Dark Mode Tutorial</h1>

            <Switch
              checked={mode}
              onChange={handleChange}
            />
          </Paper>
        </ThemeProvider> */}

{/* // Google sign in */}
        {/* <div>
          <h2>React Google Login</h2>
          <br />
          <br />
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
         */}
        <Routes>

          {/* PAGES */}
          <Route path='/' element={<Home />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/price' element={<Price />} />
          <Route path='/maps' element={<Maps />} />
          <Route path='/profile' element={<Profile />} />

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>

        <Footer />
      </>
    </Router>
  )
}

export default App
