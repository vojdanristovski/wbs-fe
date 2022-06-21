import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AlbumDetails } from "./pages/AlbumDetails";
import { ArtistDetails } from "./pages/ArtistDetails";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path="/albums/:id" element={<AlbumDetails />} />
        <Route path="/artists/:name" element={<ArtistDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
