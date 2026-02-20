import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useInView } from './hooks/useInView';

import Navbar   from './components/Navbar';
import Footer   from './components/Footer';
import Home     from './pages/Home';
import About    from './pages/About';
import Business from './pages/Business';
import Foundation from './pages/Foundation';
import BlogPage from './pages/BlogPage';
import Contact  from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

function AnimationObserver() {
  useInView();
  return null;
}

function AppInner() {
  return (
    <>
      <ScrollToTop />
      <AnimationObserver />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"            element={<Home />} />
          <Route path="/about"       element={<About />} />
          <Route path="/business"    element={<Business />} />
          <Route path="/foundation"  element={<Foundation />} />
          <Route path="/blog"        element={<BlogPage />} />
          <Route path="/contact"     element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}
