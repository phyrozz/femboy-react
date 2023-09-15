import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './routes/Home';
import Gallery from './routes/Gallery';
import Doujins from './routes/Doujins';
import Explore from './routes/Explore';
import NotFound from './routes/NotFound';
import ExplicitMessageGallery from './routes/ExplicitMessageGallery';
import ExplicitMessageDoujins from './routes/ExplicitMessageDoujins';
import { Analytics } from '@vercel/analytics/react';

function App() {
  // Check if the user has visited the explicit page
  const hasVisitedOneTimePage = sessionStorage.getItem('visitedOneTimePage');

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Route for the explicit page */}
        {!hasVisitedOneTimePage && (
          <Route path="/gallery/explicit" element={<ExplicitMessageGallery />} />
        )}
        {/* Redirect from /gallery to /explicit if not visited */}
        {!hasVisitedOneTimePage ? (
          <Route path="/gallery" element={<Navigate replace to="/gallery/explicit" />} />
        ) : (
          <Route path="/gallery" element={<Gallery />} />
        )}

        {!hasVisitedOneTimePage && (
          <Route path="/doujins/explicit" element={<ExplicitMessageDoujins />} />
        )}
        {!hasVisitedOneTimePage ? (
          <Route path="/doujins" element={<Navigate replace to="/doujins/explicit" />} />
        ) : (
          <Route path="/doujins" element={<Doujins />} />
        )}
        <Route path="/explore" element={<Explore />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Analytics />
    </>
  );
}

export default App;
