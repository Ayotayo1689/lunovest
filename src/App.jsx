import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Loader.css";

const Home = React.lazy(() => import("./pages/Home"));
import ScrollToTop from "./components/ScrollToTop";
import UserDashboard from "./pages/UserDashboard";
import ConnectWallet from "./pages/ConnectWallet";

export const Fallback = () => (
  <div className="flex-1 bg-white flex justify-center items-center min-h-[70vh] h-[100%]w-[100%]">
    <span className="loader"></span>
  </div>
);

export const LazyRoute = ({ Component }) => (
  <React.Suspense fallback={<Fallback />}>
    <Component />
  </React.Suspense>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LazyRoute Component={Home} />} />
        <Route path="/dashboard" element={<LazyRoute Component={UserDashboard} />} />
        <Route path="/connect_wallet" element={<LazyRoute Component={ConnectWallet} />} />

      </Routes>
    </Router>
  );
}

export default App;
