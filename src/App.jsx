import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom';

import { useEffect, useState } from 'react';
import { AliveScope, KeepAlive } from 'react-activation';

import './App.scss';
import './reset.css';

import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Price from './pages/Price';
import Others from './pages/Others';

import Header from './layouts/Header';
import Footer from './layouts/Footer';

import InstallMobileIcon from '@mui/icons-material/InstallMobile';

// ———————————————
// Scroll Restoration (всё кроме /price)
function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/price') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
}

// ———————————————
// Установка PWA + --vh обновление
function SetupHandlers() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const updateVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    updateVH();
    window.addEventListener('resize', updateVH);

    return () => window.removeEventListener('resize', updateVH);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('✅ PWA установлено');
    }
    setDeferredPrompt(null);
    setShowInstall(false);
  };

  return (
    showInstall && (
      <button className="install-btn" onClick={handleInstall}>
        <InstallMobileIcon/>Установить приложение
      </button>
    )
  );
}

// ———————————————
// Основной компонент
function App() {
  return (
    <Router>
      <AliveScope>
        <ScrollHandler />
        <SetupHandlers />

        <Header />

        <Routes>
          <Route path="/" element={<KeepAlive><Home /></KeepAlive>} />
          <Route path="/contacts" element={<KeepAlive><Contacts /></KeepAlive>} />
          <Route path="/price" element={<KeepAlive><Price /></KeepAlive>} />
          <Route path="/others" element={<KeepAlive><Others /></KeepAlive>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </AliveScope>
    </Router>
  );
}

export default App;
