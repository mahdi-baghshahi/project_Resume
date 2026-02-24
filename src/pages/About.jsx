import { useState } from "react";

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "حسین آقا تبار",
      avatar: "/assets/images/avatar-1.png",
      text: "مهدی برای توسعه فرانت‌اند پروژه ما استخدام شد. کیفیت کد و توجه به جزئیات در کارش فوق‌العاده بود. تسلط بالایی بر React و TypeScript دارد و راه‌حل‌های خلاقانه‌ای برای چالش‌های پیچیده ارائه داد.",
      date: " شهریور ۱۴۰۴",
    },
    {
      id: 2,
      name: "مریم مولایی",
      avatar: "/assets/images/avatar-2.png",
      text: "مهدی برای پشتیبانی و طراحی سایت استخدام شد. ما از کار انجام شده بسیار راضی بودیم. او تجربه زیادی دارد و بسیار به نیازهای مشتری توجه می‌کند. کار او بسیار حرفه‌ای و با کیفیت بود.",
      date: " فروردین ۱۴۰۳",
    },
    {
      id: 3,
      name: " آریا دریمچی",
      avatar: "/assets/images/avatar-4.png",
      text: "بسیار دقیق و منظم و بودن در کار و در رساندن تسک ها و فردی آرام و بدون حاشیه ",
      date: " مهر ۱۴۰۳",
    },
  ];

  const services = [
    {
      icon: "/assets/images/icon-design.svg",
      title: "توسده رابط کاربری",
      text: "طراحی و پیاده‌سازی UI/UX مدرن با تمرکز بر تجربه کاربری عالی",
    },
    {
      icon: "/assets/images/icon-dev.svg",
      title: "توسعه PWA",
      text: "ایجاد Progressive Web Apps با قابلیت کار آفلاین و نصب روی موبایل",
    },
    {
      icon: "/assets/images/icon-app.svg",
      title: "React توسعه",
      text: "توسعه اپلیکیشن‌های وب و موبایل با اکوسیستم React",
    },
    {
      icon: "/assets/images/icon-photo.svg",
      title: "State Management",
      text: "مدیریت state با Redux Toolkit، Context API، Zustand و React Query",
    },
  ];

  const clients = [
    {
      id: 1,
      text: "ستاره اول",
      subtitle: "فرانت اند دولوپر",
      link: "https://setareaval.ir/",
    },
    {
      id: 2,
      text: "زیترون",
      subtitle: "دیجیتال مارکتینگ",
      link: "https://zitron.ir/",
    },
    {
      id: 3,
      text: "دیجی نکست",
      subtitle: "طراح سایت (وردپرس)",
      link: "https://diginext.ir/",
    },
  ];

  const handleTestimonialClick = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setModalOpen(true);
  };

  return (
    <>
      <article className="bg-eerie-black-2 border border-jet rounded-[20px] p-[15px] shadow-shadow-1 z-[1] w-full max-w-full box-border md:w-[520px] md:max-w-[calc(100%-40px)] md:mx-auto md:p-[30px] lg:w-[700px] xl:w-auto xl:min-h-full mt-0">
        <header>
          <h2 className="text-white-2 text-fs-1 capitalize relative  pb-[17px] mb-[15px] md:mb-5 md:pb-[15px] md:font-fw-600 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[40px] after:h-[4px] after:bg-text-gradient-blue after:rounded-[3px] md:after:w-[50px] md:after:h-[5px]">
            درباره من
          </h2>
        </header>

        <section className="text-light-gray text-fs-6 font-fw-300 leading-[2] mb-[15px]">
          <p className="mb-[15px]">
            من یک توسعه‌دهنده فرانت‌اند متخصص با تمرکز بر طراحی و توسعه رابط‌های
            کاربری مدرن و بهینه هستم. تسلط کامل بر React.js، JavaScript (ES6+) و
            Tailwind CSS دارم و همواره در حال به‌روزرسانی دانش فنی خود می‌باشم.
          </p>

          <p>
            با روحیه یادگیری مداوم و سازگاری بالا، توانایی همکاری مؤثر در
            محیط‌های کاری مختلف را دارم. مشتاقم به عنوان عضوی از تیم‌های
            حرفه‌ای، با ارائه راه‌حل‌های خلاقانه و کاربردی در پیشبرد پروژه‌ها
            مشارکت کنم. رویکرد من مبتنی بر کیفیت، کارایی و تجربه کاربری عالی
            است.
          </p>
        </section>

        <section className="mb-[35px]">
          <h3 className="text-white-2 text-fs-2 capitalize mb-5 font-fw-600">
            چه کاری انجام می‌دهم
          </h3>

          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 lg:gap-6">
            {services.map((service, index) => (
              <li
                key={index}
                className="relative bg-border-gradient-onyx p-5 rounded-[14px] shadow-shadow-2 z-[1] flex justify-start items-start gap-4 overflow-hidden before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-jet before:rounded-[13px] before:z-[-1]"
              >
                <div className="flex-shrink-0 mt-1">
                  <img
                    src={service.icon}
                    alt={`${service.title} icon`}
                    width="40"
                    height="40"
                    className="w-10 h-10 object-contain service-icon"
                  />
                </div>

                <div className="text-right flex-1">
                  <h4 className="text-white-2 text-fs-4 capitalize mb-2 font-fw-500">
                    {service.title}
                  </h4>
                  <p className="text-light-gray text-fs-6 font-fw-300 leading-[1.6]">
                    {service.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-[30px]">
          <h3 className="text-white-2 text-fs-2 capitalize mb-5 font-fw-600">
            نظرات کارفرما
          </h3>

          <ul className="flex justify-start items-start gap-[15px] -mx-[15px] px-[25px] pb-[35px] pt-8 snap-x snap-mandatory overflow-x-auto overflow-y-visible scroll-smooth overscroll-x-contain scroll-snap-x-mandatory md:gap-[30px] md:-mx-[30px] md:px-[30px] has-scrollbar">
            {testimonials.map((testimonial) => (
              <li
                key={testimonial.id}
                className="min-w-full scroll-snap-center md:min-w-[calc(50%-15px)]"
              >
                <div
                  className="relative bg-border-gradient-onyx p-[15px] pt-[45px] rounded-[14px] shadow-shadow-2 cursor-pointer z-[1] md:p-[30px] md:pt-[25px] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-jet before:rounded-[13px] before:z-[-1] overflow-visible"
                  onClick={() => handleTestimonialClick(testimonial)}
                >
                  <div className="absolute top-0 right-0 z-300">
                    <div className="relative -translate-x-[15px] -translate-y-[25px] md:-translate-x-[30px] md:-translate-y-[30px]">
                      <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]  rounded-[14px] md:rounded-[20px] shadow-shadow-1 border-2 border-jet bg-gradient-onyx p-[2px]">
                        <div className="w-full h-full  rounded-[12px] md:rounded-[18px]">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width="60"
                            height="60"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-white-2 text-fs-4 capitalize mb-[7px] md:mb-[10px] md:mr-[95px]">
                    {testimonial.name}
                  </h4>

                  <div className="text-light-gray text-fs-6 font-fw-300 leading-[1.6] line-clamp-4 md:line-clamp-2">
                    <p>{testimonial.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {modalOpen && selectedTestimonial && (
          <div
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center overscroll-contain z-[100] pointer-events-all visible md:p-5"
            onClick={() => setModalOpen(false)}
          >
            <div className="fixed top-0 left-0 w-full h-screen bg-[hsl(0,0%,5%)] opacity-80 visible pointer-events-all z-[1]"></div>

            <section
              className="bg-eerie-black-2 relative p-[15px] mx-[15px] my-[15px] border border-jet rounded-[14px] shadow-shadow-5 transform scale-100 opacity-100 transition-all duration-[0.25s] ease z-[2] md:flex md:justify-start md:items-stretch md:gap-[25px] md:p-[30px] md:rounded-[20px] md:max-w-[680px] md:gap-[35px]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-[15px] left-[15px] bg-onyx rounded-lg w-8 h-8 flex justify-center items-center text-white-2 text-lg opacity-70 hover:opacity-100 focus:opacity-100"
                onClick={() => setModalOpen(false)}
              >
                <ion-icon
                  name="close-outline"
                  style={{ "--ionicon-stroke-width": "50px" }}
                ></ion-icon>
              </button>

              <div className="flex flex-col  items-center md:flex-col md:items-center">
                <figure className="bg-gradient-onyx w-max rounded-[14px] mb-[15px] shadow-shadow-2 md:rounded-[18px] md:mb-0">
                  <img
                    src={selectedTestimonial.avatar}
                    alt={selectedTestimonial.name}
                    width="80"
                    className="md:w-[65px] lg:w-[80px]"
                  />
                </figure>

                <img
                  src="/assets/images/icon-quote.svg"
                  alt="quote icon"
                  className="hidden md:block mt-3 md:flex-grow md:w-[35px]"
                />
              </div>

              <div>
                <h4 className="text-white-2 text-fs-2 capitalize mb-3">
                  {selectedTestimonial.name}
                </h4>

                <time className="text-fs-6 text-light-gray-70 font-fw-300 mb-[10px] block">
                  {selectedTestimonial.date}
                </time>

                <div>
                  <p className="text-light-gray text-fs-6 font-fw-300 leading-[1.6]">
                    {selectedTestimonial.text}
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        <section className="mb-[15px]">
          <h3 className="text-white-2 text-fs-2 capitalize mb-5 font-fw-600">
            شرکت‌ها
          </h3>

          <ul className="flex lg:justify-center justify-start items-start gap-[15px] -mx-[15px] px-[25px] pb-[25px] overflow-x-auto scroll-smooth overscroll-x-contain scroll-snap-x-mandatory scroll-px-[25px] md:gap-[30px] md:-mx-[30px] md:px-[30px] md:scroll-px-[30px] has-scrollbar">
            {clients.map((client, index) => (
              <li
                key={index}
                className="min-w-[45%] scroll-snap-start md:min-w-[calc(33.33%-20px)] lg:min-w-[calc(25%-23px)]"
              >
                <a
                  href={client.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="relative bg-border-gradient-onyx rounded-[14px] p-5 text-center shadow-shadow-2 z-[1] overflow-hidden before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-jet before:rounded-[13px] before:z-[-1] transition-all duration-300 hover:shadow-shadow-3 hover:translate-y-[-2px]">
                    <div className="relative z-10">
                      <p className="text-white-2 text-fs-4 font-fw-500 mb-3">
                        {client.text}
                      </p>
                      {client.subtitle && (
                        <p className="text-light-gray text-fs-6 font-fw-300 opacity-80">
                          {client.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
};

export default About;
