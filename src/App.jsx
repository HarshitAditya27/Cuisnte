import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Homepage from "./pages/Homepage";
import FavouritePage from "./pages/FavouritePage";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/favourites" element={<FavouritePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
