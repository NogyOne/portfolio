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
    <div className="absolute top-10 left-10">
      <img
        src="/icons/lang.svg"
        alt=""
        className="size-10 cursor-pointer"
        onClick={toggleDropdown}
      />

      {dropVisible && (
        <div className="flex flex-col items-center justify-center w-full border rounded  mt-3 drop-shadow-2xl backdrop-blur-lg bg-[#3f519480]">
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
