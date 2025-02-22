import { BrowserRouter, Route, Routes } from "react-router-dom";
import URLSearch from "./components/URLSearch";

function App() {
  return (
    <BrowserRouter>
      <div className="p-4">
        <h1 className="text-xl mb-4">React URL SearchParams </h1>
        <Routes>
          <Route path="/" element={<URLSearch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
