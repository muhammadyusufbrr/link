import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <>
      <div className="w-full min-h-[100vh] w-full bg-[#111827]">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/admin" />
        </Routes>
      </div>
    </>
  );
}

export default App;
