import { useState } from "react";
import {
  BrowserRouter as Router,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import AppRouter from "./router/AppRouter";

function AppContent() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const getCurrentPage = () => {
    if (location.pathname === "/" || location.pathname === "/about")
      return "درباره من";
    if (location.pathname === "/resume") return "رزومه";
    if (location.pathname === "/portfolio") return "نمونه کارها";
    if (location.pathname === "/blog") return "بلاگ";
    if (location.pathname === "/contact") return "تماس با من";
    return "درباره من";
  };

  const currentPage = getCurrentPage();

  return (
    <main className="my-[15px] mx-3 mb-[75px] min-w-[259px] max-w-full overflow-x-hidden md:mt-[60px] md:mb-[100px] md:mx-5 lg:max-w-[1273px] lg:w-full lg:mx-auto lg:px-5 lg:flex lg:justify-center lg:items-stretch lg:gap-6">
      <Sidebar
        isActive={sidebarActive}
        onToggle={() => setSidebarActive(!sidebarActive)}
      />

      <div className="lg:min-w-[75%] lg:w-[75%] lg:max-w-[75%] lg:m-0 relative">
        <Navbar currentPage={currentPage} onNavClick={handleNavClick} />

        <div className="pb-[80px] md:pb-[100px]  lg:pb-0">
          <AppRouter />
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
