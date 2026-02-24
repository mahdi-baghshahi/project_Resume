import { navItems } from "../data/siteData";
import { cn } from "../lib/utils";

export function Navbar({ currentPage, onNavClick }) {
  return (
    <>
      <nav className="fixed bottom-0 right-0 left-0 w-full z-50 lg:hidden">
        <div className="bg-onyx/75 backdrop-blur-[10px] border-t border-jet rounded-t-xl  shadow-portfolio-2">
          <ul className="flex flex-wrap justify-center items-center px-10 py-1.5 w-full">
            {navItems.map((item) => (
              <li key={item.id} className="flex-1 min-w-0">
                <button
                  onClick={() => onNavClick(item.path)}
                  className={cn(
                    "w-full py-5 px-2 text-center text-fs-8 whitespace-nowrap transition-colors duration-300 hover:text-light-gray-70",
                    currentPage === item.label
                      ? "text-cyan-blue"
                      : "text-light-gray"
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <nav
        className="hidden lg:block absolute top-0 left-0 w-max px-5 z-50  bg-onyx/75 backdrop-blur-[10px] border border-jet shadow-portfolio-2"
        style={{ borderRadius: "15px 0 15px 0" }}
      >
        <ul className="flex items-center gap-8 px-5">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavClick(item.path)}
                className={cn(
                  "py-5 text-fs-5 font-medium whitespace-nowrap transition-colors duration-300 hover:text-light-gray-70",
                  currentPage === item.label
                    ? "text-cyan-blue"
                    : "text-light-gray"
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
