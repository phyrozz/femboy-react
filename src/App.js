import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './routes/Home';
import Gallery from './routes/Gallery';
import Doujins from './routes/Doujins';
import Explore from './routes/Explore';
import NotFound from './routes/NotFound';
import ExplicitMessage from './routes/ExplicitMessage';

function App() {
  // Check if the user has visited the explicit page
  const hasVisitedOneTimePage = sessionStorage.getItem('visitedOneTimePage');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Route for the explicit page */}
        {!hasVisitedOneTimePage && (
          <Route path="/explicit" element={<ExplicitMessage />} />
        )}
        {/* Redirect from /gallery to /explicit if not visited */}
        {!hasVisitedOneTimePage ? (
          <Route path="/gallery" element={<Navigate replace to="/explicit" />} />
        ) : (
          <Route path="/gallery" element={<Gallery />} />
        )}
        <Route path="/doujins" element={<Doujins />} />
        <Route path="/explore" element={<Explore />} />
        <Route component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
