import {  BrowserRouter,  Routes, Route } from "react-router-dom"
import LayoutAdmin from "./layouts/LayoutAdmin";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import UsersPage from "./pages/UsersPage/UsersPage";


export default function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route element={<LayoutAdmin />}>
            <Route path="/Admin/Dashboard" element={<DashboardPage/>}/>
            <Route path="/Admin/Users" element={<UsersPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
