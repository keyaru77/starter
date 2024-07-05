import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as Pages from './pages/_index';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    let lang;

    if (localStorage.i18nextLng !== undefined) {
      lang = localStorage.i18nextLng;
      console.log(`Language '${lang}' from localStorage`);
    } else if (document.location.host.endsWith('.com')) {
      lang = 'en';
      console.log(`Language '${lang}' from document.location.host`);
    } else if (navigator.language !== undefined) {
      lang = navigator.language.substring(0, 2);
      console.log(`Language '${lang}' from navigator.language`);
    } else {
      lang = 'de';
      console.log(`Default language '${lang}'`);
    }

    localStorage.i18nextLng = lang;
    i18n.changeLanguage(lang);
  }, [i18n]);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Pages.HomePage />} />
        <Route path="/watch/:endpoint" element={<Pages.WatchPage />} />
        <Route path="/hello-world" element={<Pages.HelloWorldPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
