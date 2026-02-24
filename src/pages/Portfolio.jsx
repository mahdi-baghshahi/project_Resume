import { useState } from "react";

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectOpen, setSelectOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "رزومه",
      category: "web development",
      image: "/website-demo-image/mobile.png",
      alt: "مالی",
    },
    {
      id: 2,
      title: "اوریزون",
      category: "web development",
      image: "/assets/images/project-2.png",
      alt: "اوریزون",
    },
    {
      id: 3,
      title: "فوندو",
      category: "web design",
      image: "/assets/images/project-3.jpg",
      alt: "فوندو",
    },
    {
      id: 4,
      title: "برالالا",
      category: "applications",
      image: "/assets/images/project-4.png",
      alt: "برالالا",
    },
    {
      id: 5,
      title: "دی‌اس‌ام",
      category: "web design",
      image: "/assets/images/project-5.png",
      alt: "دی‌اس‌ام",
    },
    {
      id: 6,
      title: "متااسپارک",
      category: "web design",
      image: "/assets/images/project-6.png",
      alt: "متااسپارک",
    },
    {
      id: 7,
      title: "خلاصه",
      category: "web development",
      image: "/assets/images/project-7.png",
      alt: "خلاصه",
    },
    {
      id: 8,
      title: "مدیریت کار",
      category: "applications",
      image: "/assets/images/project-8.jpg",
      alt: "مدیریت کار",
    },
    {
      id: 9,
      title: "ورود",
      category: "web development",
      image: "/assets/images/project-9.png",
      alt: "ورود",
    },
  ];

  const filters = [
    { label: "همه", value: "all" },
    { label: "طراحی وب", value: "web design" },
    { label: "اپلیکیشن", value: "applications" },
    { label: "توسعه وب", value: "web development" },
  ];

  const getCategoryLabel = (value) => {
    const filter = filters.find((f) => f.value === value);
    return filter ? filter.label : "همه";
  };

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <article className="bg-eerie-black-2 border border-jet rounded-[20px] p-[15px] shadow-shadow-1 z-[1] w-full max-w-full box-border md:w-[520px] md:max-w-[calc(100%-40px)] md:mx-auto md:p-[30px] lg:w-[700px] xl:w-auto xl:min-h-full">
      <header>
        <h2 className="text-white-2 text-fs-1 capitalize relative pb-[7px] mb-[30px] md:font-fw-600 md:pb-[20px] after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[30px] after:h-[3px] after:bg-text-gradient-blue after:rounded-[3px] md:after:w-10 md:after:h-[5px]">
          نمونه کارها
        </h2>
      </header>

      <section>
        <ul className="hidden md:flex md:justify-start md:items-center md:gap-[25px] md:pr-[5px] md:mb-[30px]">
          {filters.map((filter) => (
            <li key={filter.value}>
              <button
                className={`text-light-gray text-fs-5 transition-colors duration-[0.25s] ease hover:text-light-gray-70 ${
                  selectedFilter === filter.value ? "text-cyan-blue" : ""
                }`}
                onClick={() => setSelectedFilter(filter.value)}
              >
                {filter.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="relative mb-[25px] md:hidden">
          <button
            className={`bg-eerie-black-2 text-light-gray flex justify-between items-center w-full px-4 py-3 border border-jet rounded-[14px] text-fs-6 font-fw-300 ${
              selectOpen ? "active" : ""
            }`}
            onClick={() => setSelectOpen(!selectOpen)}
          >
            <div className="select-value">
              {getCategoryLabel(selectedFilter)}
            </div>
            <div
              className={`select-icon transition-transform duration-[0.15s] ease-in-out ${
                selectOpen ? "rotate-180" : ""
              }`}
            >
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul
            className={`bg-eerie-black-2 absolute top-[calc(100%+6px)] w-full p-[6px] border border-jet rounded-[14px] z-[2] transition-all duration-[0.15s] ease-in-out ${
              selectOpen
                ? "opacity-100 visible pointer-events-all"
                : "opacity-0 invisible pointer-events-none"
            }`}
          >
            {filters.map((filter) => (
              <li key={filter.value}>
                <button
                  className="bg-eerie-black-2 text-light-gray text-fs-6 font-fw-300 capitalize w-full px-[10px] py-2 rounded-lg hover:bg-[hsl(240,2%,20%)]"
                  onClick={() => {
                    setSelectedFilter(filter.value);
                    setSelectOpen(false);
                  }}
                >
                  {filter.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="grid grid-cols-1 gap-[30px] mb-[10px] md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <li
              key={project.id}
              className="block"
              style={{
                animation: "scaleUp 0.25s ease forwards",
              }}
            >
              <a href="#" className="w-full block">
                <figure className="relative w-full h-[200px] rounded-2xl overflow-hidden mb-[15px] md:rounded-2xl group">
                  <div className="absolute inset-0 bg-transparent z-[1] transition-all duration-[0.25s] ease group-hover:bg-[hsla(0,0%,0%,0.5)]"></div>

                  <div className="bg-jet text-cyan-blue absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-xl p-[18px] rounded-xl opacity-0 scale-[0.8] z-[1] transition-all duration-[0.25s] ease group-hover:opacity-100 group-hover:scale-100">
                    <ion-icon
                      name="eye-outline"
                      style={{ "--ionicon-stroke-width": "50px" }}
                    ></ion-icon>
                  </div>

                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[0.25s] ease group-hover:scale-110"
                  />
                </figure>

                <h3 className="text-white-2 text-fs-5 font-fw-400 capitalize leading-[1.3] mr-[10px]">
                  {project.title}
                </h3>

                <p className="text-light-gray-70 text-fs-6 font-fw-300 mr-[10px]">
                  {project.category === "web design"
                    ? "طراحی وب"
                    : project.category === "applications"
                      ? "اپلیکیشن"
                      : project.category === "web development"
                        ? "توسعه وب"
                        : project.category}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
