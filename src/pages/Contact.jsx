import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [formValid, setFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Check form validation
    const form = e.target.form;
    if (form && form.checkValidity()) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };
  const [mapAddress, setMapAddress] = useState(
    "تهران، شهرک ولیعصر، خیابان رجایی، آلاله ۶",
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <article className="bg-eerie-black-2 border border-jet rounded-[20px] p-[15px] shadow-shadow-1 z-[1] w-full max-w-full box-border md:w-[520px] md:max-w-[calc(100%-40px)] md:mx-auto md:p-[30px] lg:w-[700px] xl:w-auto xl:min-h-full">
      <header>
        <h2 className="text-white-2 text-fs-1 capitalize relative pb-[7px] mb-[30px] md:font-fw-600 md:pb-[20px] after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[30px] after:h-[3px] after:bg-text-gradient-blue after:rounded-[3px] md:after:w-10 md:after:h-[5px]">
          تماس با من
        </h2>
      </header>

      <section className="relative h-[250px] w-full rounded-2xl mb-[30px] border border-jet overflow-hidden md:h-[380px] md:rounded-[18px]">
        <figure className="h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d404.987!2d51.342!3d35.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDM5JzAwLjAiTiA1McKwMjAnMzEuMiJF!5e0!3m2!1sen!2s!4v1647608789441!5m2!1sen!2s"
            width="400"
            height="300"
            loading="lazy"
            className="w-full h-full border-none grayscale invert"
            title="موقعیت روی نقشه"
          ></iframe>
        </figure>
      </section>

      <section className="mb-[10px]">
        <h3 className="text-white-2 text-fs-2 capitalize mb-5">فرم تماس</h3>

        <form onSubmit={handleSubmit} className="form">
          <div className="grid grid-cols-1 gap-[25px] mb-[25px] md:gap-[30px] md:mb-[30px] md:grid-cols-2">
            <input
              type="text"
              name="fullname"
              className="text-white-2 text-fs-6 font-fw-400 px-5 py-[13px] border border-jet rounded-[14px] outline-none placeholder:font-fw-500 focus:border-cyan-blue focus:invalid:border-bittersweet-shimmer md:px-5 md:py-[15px]"
              placeholder="نام و نام خانوادگی"
              required
              value={formData.fullname}
              onChange={handleInputChange}
            />

            <input
              type="email"
              name="email"
              className="text-white-2 text-fs-6 font-fw-400 px-5 py-[13px] border border-jet rounded-[14px] outline-none placeholder:font-fw-500 focus:border-cyan-blue focus:invalid:border-bittersweet-shimmer md:px-5 md:py-[15px]"
              placeholder="آدرس ایمیل"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <textarea
            name="message"
            className="text-white-2 text-fs-6 font-fw-400 px-5 py-[13px] border border-jet rounded-[14px] outline-none placeholder:font-fw-500 focus:border-cyan-blue focus:invalid:border-bittersweet-shimmer min-h-[100px] h-[120px] max-h-[200px] resize-y mb-[25px] md:mb-[30px] [&::-webkit-resizer]:hidden"
            placeholder="پیام شما"
            required
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>

          <button
            type="submit"
            disabled={!formValid}
            className={`
    relative w-full md:w-max md:mr-auto
    flex justify-center items-center gap-[10px]
    px-5 py-[13px] md:px-5 md:py-4
    rounded-full text-fs-6 md:text-base
    capitalize shadow-shadow-3 z-[1]
    transition-all duration-[0.25s] ease
    text-cyan-blue
    ${
      !formValid
        ? "opacity-70 cursor-not-allowed bg-border-gradient-onyx"
        : "hover:bg-gradient-blue-1 focus:bg-gradient-blue-1"
    }
    before:content-[''] before:absolute before:inset-[1px]
    before:rounded-full before:z-[-1]
    before:transition-all before:duration-[0.25s]
    ${
      !formValid
        ? "before:bg-gradient-jet"
        : "before:bg-gradient-jet hover:before:bg-gradient-blue-2 focus:before:bg-gradient-blue-2"
    }
  `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-base md:text-lg"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
            <span>ارسال پیام</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;

// import { useState, useEffect } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     fullname: "",
//     email: "",
//     message: "",
//   });
//   const [formValid, setFormValid] = useState(false);
//   const [submittedMessages, setSubmittedMessages] = useState([]);
//   const [showNotification, setShowNotification] = useState(false);
//   const [activeTab, setActiveTab] = useState("form"); // 'form' یا 'messages'

//   // بارگذاری پیام‌های ذخیره شده از localStorage
//   useEffect(() => {
//     const savedMessages = localStorage.getItem("contactMessages");
//     if (savedMessages) {
//       setSubmittedMessages(JSON.parse(savedMessages));
//     }
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     // بررسی اعتبار فرم
//     const form = e.target.form;
//     if (form && form.checkValidity()) {
//       setFormValid(true);
//     } else {
//       setFormValid(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // ایجاد پیام جدید با تاریخ
//     const newMessage = {
//       ...formData,
//       id: Date.now(),
//       date: new Date().toLocaleDateString("fa-IR", {
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//         hour: "2-digit",
//         minute: "2-digit",
//       }),
//     };

//     // ذخیره در state و localStorage
//     const updatedMessages = [newMessage, ...submittedMessages];
//     setSubmittedMessages(updatedMessages);
//     localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));

//     // نمایش اعلان موفقیت
//     setShowNotification(true);

//     // ریست فرم
//     setFormData({
//       fullname: "",
//       email: "",
//       message: "",
//     });
//     setFormValid(false);

//     // پنهان کردن اعلان پس از 3 ثانیه
//     setTimeout(() => {
//       setShowNotification(false);
//     }, 3000);

//     // لاگ در کنسول برای دیدن اطلاعات
//     console.log("پیام ذخیره شد:", newMessage);
//   };

//   const deleteMessage = (id) => {
//     const filteredMessages = submittedMessages.filter((msg) => msg.id !== id);
//     setSubmittedMessages(filteredMessages);
//     localStorage.setItem("contactMessages", JSON.stringify(filteredMessages));
//   };

//   const clearAllMessages = () => {
//     if (window.confirm("آیا از حذف تمام پیام‌ها اطمینان دارید؟")) {
//       setSubmittedMessages([]);
//       localStorage.removeItem("contactMessages");
//     }
//   };

//   return (
//     <article className="bg-eerie-black-2 border border-jet rounded-[20px] p-[15px] shadow-shadow-1 z-[1] w-full max-w-full box-border md:w-[520px] md:max-w-[calc(100%-40px)] md:mx-auto md:p-[30px] lg:w-[700px] xl:w-auto xl:min-h-full">
//       <header className="flex justify-between items-center">
//         <h2 className="text-white-2 text-fs-1 capitalize relative pb-[7px] mb-[30px] md:font-fw-600 md:pb-[20px] after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[30px] after:h-[3px] after:bg-text-gradient-blue after:rounded-[3px] md:after:w-10 md:after:h-[5px]">
//           تماس با من
//         </h2>

//         {/* دکمه‌های تب */}
//         <div className="flex gap-2 mb-8">
//           <button
//             onClick={() => setActiveTab("form")}
//             className={`px-4 py-2 rounded-lg text-sm transition-colors ${
//               activeTab === "form"
//                 ? "bg-cyan-blue text-white-2"
//                 : "bg-jet text-white-2/70 hover:bg-jet/80"
//             }`}
//           >
//             فرم تماس
//           </button>
//           <button
//             onClick={() => setActiveTab("messages")}
//             className={`px-4 py-2 rounded-lg text-sm transition-colors relative ${
//               activeTab === "messages"
//                 ? "bg-cyan-blue text-white-2"
//                 : "bg-jet text-white-2/70 hover:bg-jet/80"
//             }`}
//           >
//             پیام‌ها
//             {submittedMessages.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-bittersweet-shimmer text-white-2 text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                 {submittedMessages.length}
//               </span>
//             )}
//           </button>
//         </div>
//       </header>

//       {/* اعلان موفقیت */}
//       {showNotification && (
//         <div className="mb-6 p-4 bg-gradient-to-r from-green-900/30 to-cyan-blue/20 border border-green-500/30 rounded-lg text-green-400 flex items-center gap-3 animate-fadeIn">
//           <ion-icon name="checkmark-circle" className="text-xl"></ion-icon>
//           <div>
//             <p className="font-medium">پیام شما با موفقیت ثبت شد!</p>
//             <p className="text-sm text-white-2/70">
//               پیام در مرورگر شما ذخیره شده است.
//             </p>
//           </div>
//           <button
//             onClick={() => setShowNotification(false)}
//             className="mr-auto text-white-2/50 hover:text-white-2"
//           >
//             <ion-icon name="close"></ion-icon>
//           </button>
//         </div>
//       )}

//       {activeTab === "form" ? (
//         <>
//           <section className="relative h-[250px] w-full rounded-2xl mb-[30px] border border-jet overflow-hidden md:h-[380px] md:rounded-[18px]">
//             <figure className="h-full">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5651251294!2d51.3893!3d35.6892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C%20Iran!5e0!3m2!1sen!2s!4v1647608789441!5m2!1sen!2s"
//                 width="400"
//                 height="300"
//                 loading="lazy"
//                 className="w-full h-full border-none grayscale invert"
//               ></iframe>
//             </figure>
//           </section>

//           <section className="mb-[10px]">
//             <h3 className="text-white-2 text-fs-2 capitalize mb-5">فرم تماس</h3>

//             <form onSubmit={handleSubmit} className="form">
//               <div className="grid grid-cols-1 gap-[25px] mb-[25px] md:gap-[30px] md:mb-[30px] md:grid-cols-2">
//                 <input
//                   type="text"
//                   name="fullname"
//                   className="text-white-2 text-fs-6 font-fw-400 px-5 py-[13px] border border-jet rounded-[14px] outline-none placeholder:font-fw-500 focus:border-cyan-blue focus:invalid:border-bittersweet-shimmer md:px-5 md:py-[15px]"
//                   placeholder="نام و نام خانوادگی"
//                   required
//                   value={formData.fullname}
//                   onChange={handleInputChange}
//                 />

//                 <input
//                   type="email"
//                   name="email"
//                   className="text-white-2 text-fs-6 font-fw-400 px-5 py-[13px] border border-jet rounded-[14px] outline-none placeholder:font-fw-500 focus:border-cyan-blue focus:invalid:border-bittersweet-shimmer md:px-5 md:py-[15px]"
//                   placeholder="آدرس ایمیل"
//                   required
//                   value={formData.email}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <textarea
//                 name="message"
//                 className="text-white-2 text-fs-6 font-fw-400 px-5 py-[13px] border border-jet rounded-[14px] outline-none placeholder:font-fw-500 focus:border-cyan-blue focus:invalid:border-bittersweet-shimmer min-h-[100px] h-[120px] max-h-[200px] resize-y mb-[25px] md:mb-[30px] [&::-webkit-resizer]:hidden"
//                 placeholder="پیام شما"
//                 required
//                 value={formData.message}
//                 onChange={handleInputChange}
//               ></textarea>

//               <button
//                 type="submit"
//                 disabled={!formValid}
//                 className={`relative w-full bg-border-gradient-onyx text-cyan-blue flex justify-center items-center gap-[10px] px-5 py-[13px] rounded-[14px] text-fs-6 capitalize shadow-shadow-3 z-[1] transition-all duration-[0.25s] ease md:w-max md:mr-auto md:px-5 md:py-4 md:text-base ${
//                   !formValid ? "opacity-70 cursor-not-allowed" : ""
//                 } hover:bg-gradient-blue-1 focus:bg-gradient-blue-1 disabled:hover:bg-border-gradient-onyx before:content-[''] before:absolute before:inset-[1px] before:bg-gradient-jet before:rounded-inherit before:z-[-1] before:transition-all before:duration-[0.25s] hover:before:bg-gradient-blue-2 focus:before:bg-gradient-blue-2 disabled:hover:before:bg-gradient-jet`}
//               >
//                 <ion-icon
//                   name="paper-plane"
//                   className="text-base md:text-lg"
//                 ></ion-icon>
//                 <span>ارسال پیام</span>
//               </button>
//             </form>
//           </section>
//         </>
//       ) : (
//         <section className="mb-[10px]">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-white-2 text-fs-2 capitalize">
//               پیام‌های دریافتی ({submittedMessages.length})
//             </h3>
//             {submittedMessages.length > 0 && (
//               <button
//                 onClick={clearAllMessages}
//                 className="text-bittersweet-shimmer text-sm hover:text-red-400 transition-colors flex items-center gap-2"
//               >
//                 <ion-icon name="trash-outline"></ion-icon>
//                 حذف همه
//               </button>
//             )}
//           </div>

//           {submittedMessages.length === 0 ? (
//             <div className="text-center py-12 border-2 border-dashed border-jet rounded-2xl">
//               <ion-icon
//                 name="mail-open-outline"
//                 className="text-6xl text-white-2/30 mb-4"
//               ></ion-icon>
//               <p className="text-white-2/60">
//                 هنوز هیچ پیامی دریافت نکرده‌اید.
//               </p>
//               <p className="text-white-2/40 text-sm mt-2">
//                 پیام‌های ارسالی در اینجا نمایش داده می‌شوند.
//               </p>
//             </div>
//           ) : (
//             <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
//               {submittedMessages.map((msg) => (
//                 <div
//                   key={msg.id}
//                   className="bg-jet/50 border border-jet rounded-xl p-5 hover:border-cyan-blue/30 transition-colors group"
//                 >
//                   <div className="flex justify-between items-start mb-3">
//                     <div>
//                       <h4 className="text-white-2 font-medium text-lg">
//                         {msg.fullname}
//                       </h4>
//                       <p className="text-cyan-blue text-sm mt-1">{msg.email}</p>
//                     </div>
//                     <div className="flex gap-2 items-center">
//                       <span className="text-white-2/50 text-xs">
//                         {msg.date}
//                       </span>
//                       <button
//                         onClick={() => deleteMessage(msg.id)}
//                         className="text-white-2/30 hover:text-bittersweet-shimmer transition-colors opacity-0 group-hover:opacity-100"
//                       >
//                         <ion-icon name="close-circle"></ion-icon>
//                       </button>
//                     </div>
//                   </div>
//                   <p className="text-white-2/80 leading-relaxed border-t border-white-2/10 pt-3">
//                     {msg.message}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}

//           <div className="mt-8 p-4 bg-jet/30 rounded-lg border border-jet">
//             <div className="flex items-start gap-3">
//               <ion-icon
//                 name="information-circle"
//                 className="text-cyan-blue text-xl mt-0.5"
//               ></ion-icon>
//               <div>
//                 <p className="text-white-2/80 text-sm">
//                   پیام‌ها در حافظه مرورگر شما ذخیره می‌شوند. در صورت پاک کردن
//                   تاریخچه مرورگر، پیام‌ها نیز حذف خواهند شد.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}
//     </article>
//   );
// };

// export default Contact;
