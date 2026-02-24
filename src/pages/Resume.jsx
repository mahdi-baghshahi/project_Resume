const Resume = () => {
  const education = [
    {
      title: "دانشگاه تهران شرق",
      period: "۱۳۸۶ — ۱۳۸۷",
      text: "مهندسی کامپیوتر",
    },
    {
      title: "دبیرستان امام حسین ",
      period: "۱۳۸۱ — ۱۳۸۳",
      text: " رشته ریاضی فیزیک",
    },
  ];

  const experience = [
    {
      title: "فرانت اند( شرکت ستاره یک )",
      period: "فروردین ۱۴۰۴ — دی ۱۴۰۴",
      text: "شرکت ستاره‌یک نقطه آغاز رشد حرفه‌ای من بود. به عنوان کارآموز فرانت‌اند، در پروژه‌های واقعی مشارکت کردم و تحت نظارت متخصصان باتجربه، مهارت‌هایم در React.js، TypeScript و معماری‌های مدرن Front-end را تقویت کردم.",
    },
    {
      title: "دیزاینر و طراح سایت ( شرکت زیترون )",
      period: "۱۳۸۹ — ۱۳۹۲",
      text: "طراحی و توسعه رابط کاربری برای وب‌سایت‌های مختلف.",
    },
    {
      title: "ادمین سایت ( شرکت دیجی نکست )",
      period: "۱۳۹۲ — ۱۳۹۴",
      text: "طراحی و اجرای پروژه‌های هنری و خلاقانه برای برندهای مختلف.",
    },
  ];

  const skills = [
    { name: "React.js", value: 50 },
    { name: "TypeScript", value: 35 },
    { name: "Next.js", value: 35 },
    { name: "JavaScript", value: 40 },
    { name: "Tailwind CSS", value: 80 },
    { name: "Redux Toolkit", value: 85 },
    { name: "PWA", value: 40 },
    { name: "Git/GitHub", value: 85 },
    { name: "html/css", value: 70 },
    { name: "Wordpress", value: 70 },
  ];

  return (
    <article className="bg-eerie-black-2 border border-jet rounded-[20px] p-[15px] shadow-shadow-1 z-[1] w-full max-w-full box-border md:w-[520px] md:max-w-[calc(100%-40px)] md:mx-auto md:p-[30px] lg:w-[700px] xl:w-auto xl:min-h-full">
      <header>
        <h2 className="text-white-2 text-fs-1 capitalize relative pb-[7px] mb-[30px] md:font-fw-600 md:pb-[20px] after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[30px] after:h-[3px] after:bg-text-gradient-blue after:rounded-[3px] md:after:w-10 md:after:h-[5px]">
          رزومه
        </h2>
      </header>

      <section className="mb-[30px]">
        <div className="flex items-center gap-[15px] mb-[25px]">
          <div className="relative bg-border-gradient-onyx w-[30px] h-[30px] rounded-lg flex justify-center items-center text-base text-cyan-blue shadow-shadow-1 z-[1] md:w-12 md:h-12 md:rounded-xl md:text-lg before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-jet before:rounded-inherit before:z-[-1]">
            <ion-icon
              name="book-outline"
              style={{ "--ionicon-stroke-width": "35px" }}
            ></ion-icon>
          </div>

          <h3 className="text-white-2 text-fs-2 capitalize">تحصیلات</h3>
        </div>

        <ol className="text-fs-6 mr-[45px] md:mr-[65px]">
          {education.map((item, index) => (
            <li
              key={index}
              className="relative mb-5 last:mb-0 before:content-[''] before:absolute before:-top-[25px] before:-right-[30px] before:w-[1px] before:h-[calc(100%+50px)] before:bg-jet last:before:hidden md:before:-right-[40px] after:content-[''] after:absolute after:top-[5px] after:-right-[33px] after:h-[6px] after:w-[6px] after:bg-text-gradient-blue after:rounded-full after:shadow-[0_0_0_4px_var(--jet)] md:after:h-2 md:after:w-2 md:after:-right-[43px]"
            >
              <h4 className="text-white-2 text-fs-6 leading-[1.3] mb-[7px]">
                {item.title}
              </h4>
              <span className="text-purple-blue font-fw-400 leading-[1.6] block mb-[7px]">
                {item.period}
              </span>
              <p className="text-light-gray font-fw-300 leading-[1.6] md:max-w-[700px]">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-[30px]">
        <div className="flex items-center gap-[15px] mb-[25px]">
          <div className="relative bg-border-gradient-onyx w-[30px] h-[30px] rounded-lg flex justify-center items-center text-base text-cyan-blue shadow-shadow-1 z-[1] md:w-12 md:h-12 md:rounded-xl md:text-lg before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-jet before:rounded-inherit before:z-[-1]">
            <ion-icon
              name="book-outline"
              style={{ "--ionicon-stroke-width": "35px" }}
            ></ion-icon>
          </div>

          <h3 className="text-white-2 text-fs-2 capitalize">سوابق کاری</h3>
        </div>

        <ol className="text-fs-6 mr-[45px] md:mr-[65px]">
          {experience.map((item, index) => (
            <li
              key={index}
              className="relative mb-5 last:mb-0 before:content-[''] before:absolute before:-top-[25px] before:-right-[30px] before:w-[1px] before:h-[calc(100%+50px)] before:bg-jet last:before:hidden md:before:-right-[40px] after:content-[''] after:absolute after:top-[5px] after:-right-[33px] after:h-[6px] after:w-[6px] after:bg-text-gradient-blue after:rounded-full after:shadow-[0_0_0_4px_var(--jet)] md:after:h-2 md:after:w-2 md:after:-right-[43px]"
            >
              <h4 className="text-white-2 text-fs-6 leading-[1.3] mb-[7px]">
                {item.title}
              </h4>
              <span className="text-purple-blue font-fw-400 leading-[1.6] block mb-[7px]">
                {item.period}
              </span>
              <p className="text-light-gray font-fw-300 leading-[1.6] md:max-w-[700px]">
                {item.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h3 className="text-white-2 text-fs-2 capitalize mb-5">مهارت‌های من</h3>

        <ul className="relative bg-border-gradient-onyx p-5 rounded-[14px] shadow-shadow-2 z-[1] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-jet before:rounded-inherit before:z-[-1]">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="mb-[15px] last:mb-0 md:mb-[25px] md:last:mb-0"
            >
              <div className="flex items-center gap-[5px] mb-2">
                <h5 className="text-white-2 text-fs-7 font-fw-500">
                  {skill.name}
                </h5>
                <data
                  value={skill.value}
                  className="text-light-gray text-fs-7 font-fw-300"
                >
                  {skill.value}٪
                </data>
              </div>

              <div className="bg-jet w-full h-2 rounded-[10px]">
                <div
                  className="bg-text-gradient-blue h-full rounded-inherit transition-all duration-[0.25s] ease"
                  style={{ width: `${skill.value}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Resume;
