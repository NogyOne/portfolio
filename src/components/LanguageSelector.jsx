import { h } from "preact";
import { useState } from "preact/hooks";

export default function LanguageSelector() {
  const [dropVisible, setDropVisible] = useState(false);
  const languages = [
    { name: "English", href: "/en" },
    { name: "Español", href: "/" },
  ];

  const toggleDropdown = () => {
    setDropVisible(!dropVisible);
  };

  return (
    <div className="p-2 border-gray-400 border bg-[#222E44] rounded-full w-12 h-12 transform hover:scale-x-125 hover:scale-y-125 transition duration-300 ease-out hover:border-[#279EFF]">
      <img
        src="/icons/lang.svg"
        alt=""
        className="m-auto rounded-full size-8 cursor-pointer"
        onClick={toggleDropdown}
      />

      {dropVisible && (
        <div className="flex flex-col items-center justify-center w-28 border rounded  mt-3 drop-shadow-2xl backdrop-blur-lg bg-[#3f519480]">
          {languages.map((language) => (
            <a
              key={language}
              value={language.name}
              href={language.href}
              className="hover:bg-[#3f519480] cursor-pointer w-full px-4 py-1"
            >
              {language.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
