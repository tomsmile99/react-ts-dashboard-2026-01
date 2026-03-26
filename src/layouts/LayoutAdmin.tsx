import Sidebar from "./includes/templateAdmin/Sidebar"
import Header from './includes/templateAdmin/Header';
import Footer from "./includes/templateAdmin/Footer";
import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-100">
        <div className="flex min-h-screen">
          <Sidebar collapsed={false}/>
          <main className="flex-1">
            <Header/>
            <section className="p-4 sm:p-6 lg:p-8">
              <Outlet/>
            </section>
            <Footer/>
          </main>
        </div>
      </div>
    </>
  )
}

export default LayoutAdmin
