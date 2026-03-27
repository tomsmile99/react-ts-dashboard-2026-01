import {  BrowserRouter,  Routes, Route } from "react-router-dom"
import LayoutAdmin from "./layouts/LayoutAdmin";
import PageDashboard from "./pages/PageDashboard/PageDashboard";
import PageUsers from "./pages/PageUsers/PageUsers";
import PageContainers from "./pages/GroupLayout/PageContainers";
import PageGrid from "./pages/GroupLayout/PageGrid";
import PageFlex from "./pages/GroupLayout/PageFlex";
import PageSpacingUtilities from "./pages/GroupLayout/PageSpacingUtilities";
import PageWidthHeight from "./pages/GroupLayout/PageWidthHeight";
import PagePositionUtilities from "./pages/GroupLayout/PagePositionUtilities";
import PageDisplayUtilities from "./pages/GroupLayout/PageDisplayUtilities";


export default function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route element={<LayoutAdmin />}>
            <Route path="/Admin/PageDashboard" element={<PageDashboard/>}/>
            <Route path="/Admin/PageUsers" element={<PageUsers/>}/>
            <Route path="/Admin/Layout/PageContainers" element={<PageContainers/>}/>
            <Route path="/Admin/Layout/PageGrid" element={<PageGrid/>}/>
            <Route path="/Admin/Layout/PageFlex" element={<PageFlex/>}/>
            <Route path="/Admin/Layout/PageSpacingUtilities" element={<PageSpacingUtilities/>}/>
            <Route path="/Admin/Layout/PageWidthHeight" element={<PageWidthHeight/>}/>
            <Route path="/Admin/Layout/PagePositionUtilities" element={<PagePositionUtilities/>}/>
            <Route path="/Admin/Layout/PageDisplayUtilities" element={<PageDisplayUtilities/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
