const Sidebar = ({ isActive, onToggle }) => {
  return (
    <aside
      className={`
        bg-eerie-black-2 border border-jet rounded-2xl p-4 shadow-shadow-1 z-10 
        w-full mb-4 overflow-hidden
        transition-all duration-700 ease-in-out lg:transition-none lg:duration-0
        ${isActive ? "max-h-[2000px]" : "max-h-[120px]"}
        lg:sticky lg:top-16 lg:w-1/4 lg:max-w-none lg:h-screen lg:mb-0 lg:pt-16 lg:p-8 
        lg:!max-h-[800px]
      `}
    >
      <div className="relative flex items-center gap-4 lg:flex-col">
        <figure className="bg-gradient-onyx rounded-2xl lg:rounded-3xl overflow-hidden flex-shrink-0">
          <img
            src="/assets/images/my-avatar.png"
            alt="مهدی باغشاهی"
            className="w-20 lg:w-40"
          />
        </figure>

        <div className="flex flex-col flex-grow lg:text-center">
          <h1 className="text-white-2 text-[17px] font-medium tracking-tight mb-3 lg:text-[26px]">
            مهدی باغشاهی
          </h1>
          <p className="text-white-1 bg-onyx text-[11px] lg:text-[12px] font-light px-[12px] py-[3px] lg:py-[5px] lg:px-[18px] rounded-[8px] lg:mx-auto w-fit">
            فرانت اند
          </p>
        </div>

        <button
          onClick={onToggle}
          className={`
            absolute -top-4 -left-4 bg-border-gradient-onyx text-cyan-blue z-[1]
            p-[10px] rounded-br-[10px] shadow-shadow-1 transition-all duration-300 
            hover:bg-gradient-blue-1 focus:bg-gradient-blue-1
            lg:hidden before:content-[''] before:absolute before:inset-[1px] 
            before:rounded-br-[10px] before:z-[-1] before:bg-gradient-jet 
            before:transition-all before:duration-300 hover:before:bg-gradient-blue-2 
            focus:before:bg-gradient-blue-2
          `}
        >
          <ion-icon
            name="chevron-down"
            style={{ "--ionicon-stroke-width": "35px" }}
          ></ion-icon>
        </button>
      </div>

      <div
        className={`
          transition-all duration-700 ease-in-out lg:transition-none lg:duration-0
          ${
            isActive
              ? "opacity-100 visible mt-[16px]"
              : "opacity-0 invisible h-0 mt-0 pointer-events-none"
          }
          lg:opacity-100 lg:visible lg:mt-[16px] lg:h-auto lg:pointer-events-auto
        `}
      >
        <hr className="border-jet my-[30px] lg:h-[1px]" />

        <ul className="grid grid-cols-1 gap-[20px] lg:gap-[25px]">
          {/* ایمیل */}
          <li className="flex items-start gap-4">
            <div className="relative w-10 h-10 flex-shrink-0 bg-border-gradient-onyx rounded-[12px] flex items-center justify-center text-cyan-blue shadow-shadow-1 overflow-hidden z-[1] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-jet before:rounded-[10px] before:z-[-1]">
              <ion-icon name="mail-outline" class="text-[18px]"></ion-icon>
            </div>
            <div className="min-w-0 flex-1 overflow-hidden">
              <p className="text-light-gray-70 text-xs uppercase mb-1">ایمیل</p>
              <a
                href="mailto:mahdibaghshahi@gmail.com"
                className="text-white-2 text-[14px] hover:text-cyan-blue transition-colors duration-300 block truncate"
                title="mahdibaghshahi@gmail.com"
              >
                mahdibaghshahi@gmail.com
              </a>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="relative w-10 h-10 flex-shrink-0 bg-border-gradient-onyx rounded-[12px] flex items-center justify-center text-cyan-blue shadow-shadow-1 overflow-hidden z-[1] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-jet before:rounded-[10px] before:z-[-1]">
              <ion-icon name="call-outline" class="text-[18px]"></ion-icon>
            </div>
            <div className="min-w-0 flex-1 overflow-hidden">
              <p className="text-light-gray-70 text-xs uppercase mb-1">تلفن</p>
              <a
                href="tel:+989140889979"
                className="text-white-2 text-[14px] hover:text-cyan-blue transition-colors duration-300 block truncate"
              >
                <span dir="ltr" className="inline-block truncate">
                  +98 914 088 99 79
                </span>
              </a>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="relative w-10 h-10 flex-shrink-0 bg-border-gradient-onyx rounded-[12px] flex items-center justify-center text-cyan-blue shadow-shadow-1 overflow-hidden z-[1] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-jet before:rounded-[10px] before:z-[-1]">
              <ion-icon name="calendar-outline" class="text-[18px]"></ion-icon>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-light-gray-70 text-xs uppercase mb-1">
                تاریخ تولد
              </p>
              <time className="text-white-2 text-[14px]">۶ شهریور ۱۳۸۱</time>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="relative w-10 h-10 flex-shrink-0 bg-border-gradient-onyx rounded-[12px] flex items-center justify-center text-cyan-blue shadow-shadow-1 overflow-hidden z-[1] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-jet before:rounded-[10px] before:z-[-1]">
              <ion-icon name="location-outline" class="text-[18px]"></ion-icon>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-light-gray-70 text-xs uppercase mb-1">آدرس</p>
              <address className="text-white-2 text-[14px] not-italic">
                تهران، ایران
              </address>
            </div>
          </li>
        </ul>

        <hr className="border-jet my-[25px] lg:opacity-0" />

        <div className="lg:text-center">
          <ul className="flex justify-start gap-5 lg:justify-center">
            <li>
              <a
                href="https://t.me/MAHDi_2001c"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-gray-70 hover:text-cyan-blue transition-colors duration-300 flex items-center"
                aria-label="تلگرام"
              >
                <div className="relative w-9 h-9 bg-border-gradient-onyx rounded-[10px] flex items-center justify-center shadow-shadow-1 overflow-hidden z-[1] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-jet before:rounded-[8px] before:z-[-1] hover:scale-105 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.06-.2-.07-.06-.17-.04-.24-.02-.1.02-1.79 1.14-5.06 3.34-.48.33-.92.49-1.31.48-.43-.01-1.27-.25-1.89-.45-.76-.25-1.36-.39-1.31-.82.03-.23.33-.47.91-.72 3.57-1.55 5.96-2.58 7.14-3.09 3.12-1.36 3.77-1.6 4.2-1.61.09 0 .3.02.43.14.11.1.14.23.15.33.01.1.01.32-.01.45z" />
                  </svg>
                </div>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/mahdi-baghshahi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-gray-70 hover:text-cyan-blue transition-colors duration-300 flex items-center"
                aria-label="گیت‌هاب"
              >
                <div className="relative w-9 h-9 bg-border-gradient-onyx rounded-[10px] flex items-center justify-center shadow-shadow-1 overflow-hidden z-[1] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-jet before:rounded-[8px] before:z-[-1] hover:scale-105 transition-transform duration-300">
                  <ion-icon name="logo-github" class="text-[18px]"></ion-icon>
                </div>
              </a>
            </li>

            <li>
              <a
                href="https://instagram.com/mahdi.baghshahi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-gray-70 hover:text-cyan-blue transition-colors duration-300 flex items-center"
                aria-label="اینستاگرام"
              >
                <div className="relative w-9 h-9 bg-border-gradient-onyx rounded-[10px] flex items-center justify-center shadow-shadow-1 overflow-hidden z-[1] before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-jet before:rounded-[8px] before:z-[-1] hover:scale-105 transition-transform duration-300">
                  <ion-icon
                    name="logo-instagram"
                    class="text-[18px]"
                  ></ion-icon>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
