const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/resources/images/blog-1.jpg",
      alt: "Design conferences in 2022",
      category: "طراحی",
      date: "۴ اسفند ۱۴۰۰",
      title: "کنفرانس‌های طراحی در ۱۴۰۱",
      text: "بررسی رویدادهای مهم طراحی و کنفرانس‌های سال جدید در حوزه طراحی وب و گرافیک.",
    },
    {
      id: 2,
      image: "/resources/images/blog-2.jpg",
      alt: "Best fonts every designer",
      category: "Design",
      date: "Fab 23, 2022",
      title: "بهترین فونت‌ها برای هر طراح",
      text: "معرفی فونت‌های برتر و پرکاربرد در طراحی وب و گرافیک برای استفاده در پروژه‌های مختلف.",
    },
    {
      id: 3,
      image: "/resources/images/blog-3.jpg",
      alt: "Design digest #80",
      category: "Design",
      date: "Fab 23, 2022",
      title: "خلاصه طراحی شماره ۸۰",
      text: "مرور آخرین روندها و اخبار دنیای طراحی در هفته گذشته و معرفی پروژه‌های برتر.",
    },
    {
      id: 4,
      image: "/resources/images/blog-4.jpg",
      alt: "UI interactions of the week",
      category: "Design",
      date: "Fab 23, 2022",
      title: "تعاملات رابط کاربری هفته",
      text: "بررسی بهترین نمونه‌های تعاملات کاربری و انیمیشن‌های خلاقانه در طراحی رابط کاربری.",
    },
    {
      id: 5,
      image: "/resources/images/blog-5.jpg",
      alt: "The forgotten art of spacing",
      category: "Design",
      date: "Fab 23, 2022",
      title: "هنر فراموش شده فاصله‌گذاری",
      text: "اهمیت فاصله‌گذاری در طراحی و نحوه استفاده صحیح از فضای خالی در پروژه‌ها.",
    },
    {
      id: 6,
      image: "/resources/images/blog-6.jpg",
      alt: "Design digest #79",
      category: "Design",
      date: "Fab 23, 2022",
      title: "خلاصه طراحی شماره ۷۹",
      text: "مرور آخرین روندها و اخبار دنیای طراحی و معرفی پروژه‌های خلاقانه و الهام‌بخش.",
    },
  ];

  return (
    <article className="bg-eerie-black-2 border border-jet rounded-[20px] p-[15px] shadow-shadow-1 z-[1] w-full max-w-full box-border md:w-[520px] md:max-w-[calc(100%-40px)] md:mx-auto md:p-[30px] lg:w-[700px] xl:w-auto xl:min-h-full">
      <header>
        <h2 className="text-white-2 text-fs-1 capitalize relative pb-[7px] mb-[30px] md:font-fw-600 md:pb-[20px] after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[30px] after:h-[3px] after:bg-text-gradient-blue after:rounded-[3px] md:after:w-10 md:after:h-[5px]">
          بلاگ
        </h2>
      </header>

      <section className="mb-[10px]">
        <ul className="grid grid-cols-1 gap-5 md:gap-[30px] md:grid-cols-2">
          {blogPosts.map((post) => (
            <li key={post.id}>
              <a
                href="#"
                className="relative bg-border-gradient-onyx h-full shadow-shadow-4 rounded-2xl z-[1] block group before:content-[''] before:absolute before:inset-[1px] before:rounded-inherit before:bg-eerie-black-1 before:z-[-1]"
              >
                <figure className="w-full h-[200px] rounded-xl overflow-hidden md:h-[230px]">
                  <img
                    src={post.image}
                    alt={post.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[0.25s] ease group-hover:scale-110"
                  />
                </figure>

                <div className="p-[15px] md:p-[25px]">
                  <div className="flex justify-start items-center gap-[7px] mb-[10px]">
                    <p className="text-light-gray-70 text-fs-6 font-fw-300">
                      {post.category}
                    </p>
                    <span className="bg-light-gray-70 w-1 h-1 rounded-full"></span>
                    <time className="text-light-gray-70 text-fs-6 font-fw-300">
                      {post.date}
                    </time>
                  </div>

                  <h3 className="text-white-2 text-fs-2 capitalize mb-[10px] leading-[1.3] transition-colors duration-[0.25s] ease group-hover:text-cyan-blue">
                    {post.title}
                  </h3>

                  <p className="text-light-gray text-fs-6 font-fw-300 leading-[1.6]">
                    {post.text}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Blog;
