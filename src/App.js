import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Gallery from './routes/Gallery';
import Doujins from './routes/Doujins';
import Explore from './routes/Explore';
import NotFound from './routes/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/doujins" element={<Doujins />} />
        <Route path="/explore" element={<Explore />} />
        <Route component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
