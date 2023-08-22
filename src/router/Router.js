import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import { Route, Routes } from "react-router-dom";
const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
    </Routes>
  );
};

export default Router;
