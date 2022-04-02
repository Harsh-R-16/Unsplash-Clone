import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Topics from "./Components/Topics/Topics";
import Topic from "./Components/Topic/Topic";
import Explore from "./Components/Explore/Explore";
import Search from "./Components/Search/Search";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/t" element={<Topics />} />
        <Route path="/t/:topic" element={<Topic />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/s/photos:query" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
