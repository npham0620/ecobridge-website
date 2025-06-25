import { Routes, Route } from "react-router-dom";
import App from "./App"; // Your current full layout
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import Press from "./pages/Press";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/team" element={<Team />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/press" element={<Press />} />
    </Routes>
  );
}