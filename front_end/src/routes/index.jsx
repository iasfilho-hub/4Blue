import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import HistoryPage from "../pages/History/HistoryPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/historico',
    element: <HistoryPage />
  },
])
