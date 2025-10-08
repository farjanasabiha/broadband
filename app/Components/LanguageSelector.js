// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import i18n from "../i18n";

// export default function LanguageSelector() {
//   const [language, setLanguage] = useState(i18n.language || "en");

//   useEffect(() => {
//     const handleLangChange = (lng) => setLanguage(lng);
//     i18n.on("languageChanged", handleLangChange);
//     return () => i18n.off("languageChanged", handleLangChange);
//   }, []);

//   const handleLanguageChange = (lng) => {
//     i18n.changeLanguage(lng);
//     setLanguage(lng);
//   };

//   return (
//     <div className="dropdown dropdown-end">
//       <div
//         tabIndex={0}
//         role="button"
//         className="flex items-center bg-black text-white px-3 py-1 rounded cursor-pointer"
//       >
//         <Image
//           src={language === "en" ? "/en.png" : "/bn.png"}
//           alt="Flag"
//           width={20}
//           height={20}
//           className="mr-2"
//         />
//         {language === "en" ? "English" : "বাংলা"}
//         <svg
//           className="ml-2 w-4 h-4 fill-current"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 20 20"
//         >
//           <path d="M7 7l3-3 3 3H7z" />
//         </svg>
//       </div>
//       <ul
//         tabIndex={0}
//         className="dropdown-content z-[1] menu p-2 shadow bg-black rounded-box w-36 text-white"
//       >
//         <li>
//           <button
//             className="flex items-center gap-2 hover:text-primaryColor"
//             onClick={() => handleLanguageChange("en")}
//           >
//             <Image src="/en.png" alt="English" width={20} height={20} />
//             English
//           </button>
//         </li>
//         <li>
//           <button
//             className="flex items-center gap-2 hover:text-primaryColor"
//             onClick={() => handleLanguageChange("bn")}
//           >
//             <Image src="/bn.png" alt="Bangla" width={20} height={20} />
//             বাংলা
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// }
