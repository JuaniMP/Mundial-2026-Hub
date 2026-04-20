import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Experience from './pages/Experience';
import Stadiums from './pages/Stadiums';
import Superpolla from './pages/Superpolla';
import Album from './pages/Album';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Experience />} />
          <Route path="stadiums" element={<Stadiums />} />
          <Route path="superpolla" element={<Superpolla />} />
          <Route path="album" element={<Album />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
