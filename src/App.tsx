import {  BrowserRouter,  Routes, Route } from "react-router-dom"
import LayoutAdmin from "./layouts/LayoutAdmin";
import PageDashboard from "./pages/PageDashboard/PageDashboard";
import PageUsers from "./pages/PageUsers/PageUsers";
import PageContainers from "./pages/GroupLayouts/PageContainers";
import PageGrid from "./pages/GroupLayouts/PageGrid";
import PageFlex from "./pages/GroupLayouts/PageFlex";
import PageSpacingUtilities from "./pages/GroupLayouts/PageSpacingUtilities";
import PageWidthHeight from "./pages/GroupLayouts/PageWidthHeight";
import PagePositionUtilities from "./pages/GroupLayouts/PagePositionUtilities";
import PageDisplayUtilities from "./pages/GroupLayouts/PageDisplayUtilities";
import PageOverflowUtilities from "./pages/GroupLayouts/PageOverflowUtilities";
import PageResponsiveBreakpoints from "./pages/GroupLayouts/PageResponsiveBreakpoints";
import PageZIndexVisibility from "./pages/GroupLayouts/PageZIndexVisibility";
import PageAspectRatioObjectFit from "./pages/GroupLayouts/PageAspectRatioObjectFit";
import PageButtons from "./pages/GroupUIComponents/PageButtons";
import PageCards from "./pages/GroupUIComponents/PageCards";
import PageBadges from "./pages/GroupUIComponents/PageBadges";
import PageAlerts from "./pages/GroupUIComponents/PageAlerts";
import PageAvatars from "./pages/GroupUIComponents/PageAvatars";
import PageTabs from "./pages/GroupUIComponents/PageTabs";
import PageAccordion from "./pages/GroupUIComponents/PageAccordion";
import PageModals from "./pages/GroupUIComponents/PageModals";
import PageDropdowns from "./pages/GroupUIComponents/PageDropdowns";
import PageTables from "./pages/GroupUIComponents/PageTables";
import PageForms from "./pages/GroupUIComponents/PageForms";
import PageBreadcrumbs from "./pages/GroupUIComponents/PageBreadcrumbs";
import PagePagination from "./pages/GroupUIComponents/PagePagination";


export default function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route element={<LayoutAdmin />}>
            <Route path="/Admin/PageDashboard" element={<PageDashboard/>}/>
            <Route path="/Admin/PageUsers" element={<PageUsers/>}/>

            {/* Layout */}
            <Route path="/Admin/Layout/PageContainers" element={<PageContainers/>}/>
            <Route path="/Admin/Layout/PageGrid" element={<PageGrid/>}/>
            <Route path="/Admin/Layout/PageFlex" element={<PageFlex/>}/>
            <Route path="/Admin/Layout/PageSpacingUtilities" element={<PageSpacingUtilities/>}/>
            <Route path="/Admin/Layout/PageWidthHeight" element={<PageWidthHeight/>}/>
            <Route path="/Admin/Layout/PagePositionUtilities" element={<PagePositionUtilities/>}/>
            <Route path="/Admin/Layout/PageDisplayUtilities" element={<PageDisplayUtilities/>}/>
            <Route path="/Admin/Layout/PageOverflowUtilities" element={<PageOverflowUtilities/>}/>
            <Route path="/Admin/Layout/PageResponsiveBreakpoints" element={<PageResponsiveBreakpoints/>}/>
            <Route path="/Admin/Layout/PageZIndexVisibility" element={<PageZIndexVisibility/>}/>
            <Route path="/Admin/Layout/PageAspectRatioObjectFit" element={<PageAspectRatioObjectFit/>}/>

            {/* UI */}
            <Route path="/Admin/UI/PageButtons" element={<PageButtons/>}/>
            <Route path="/Admin/UI/PageCards" element={<PageCards/>}/>
            <Route path="/Admin/UI/PageBadges" element={<PageBadges/>}/>
            <Route path="/Admin/UI/PageAlerts" element={<PageAlerts/>}/>
            <Route path="/Admin/UI/PageAvatars" element={<PageAvatars/>}/>
            <Route path="/Admin/UI/PageTabs" element={<PageTabs/>}/>
            <Route path="/Admin/UI/PageAccordion" element={<PageAccordion/>}/>
            <Route path="/Admin/UI/PageModals" element={<PageModals/>}/>
            <Route path="/Admin/UI/PageDropdowns" element={<PageDropdowns/>}/>
            <Route path="/Admin/UI/PageTables" element={<PageTables/>}/>
            <Route path="/Admin/UI/PageForms" element={<PageForms/>}/>
            <Route path="/Admin/UI/PageBreadcrumbs" element={<PageBreadcrumbs/>}/>
            <Route path="/Admin/UI/PagePagination" element={<PagePagination/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
