import { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "us" },
  { code: "ms", name: "Bahasa Melayu", flag: "my" },
  { code: "ja", name: "日本語", flag: "jp" },
  { code: "ko", name: "한국어", flag: "kr" },
  { code: "zh", name: "中文", flag: "cn" },
];

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages[0]
  );

  useEffect(() => {
    const pathSegments = window.location.pathname.split("/");
    const langCode = pathSegments[1];
    const language = languages.find((lang) => lang.code === langCode);
    if (language) {
      setSelectedLanguage(language);
    }
  }, []);

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);

    const pathSegments = window.location.pathname.split("/");
    pathSegments[1] = language.code;
    const newPath = pathSegments.join("/");
    window.location.href = newPath;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 py-2 text-[#EE7380] hover:text-[#d65f6b] transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#EE7380]"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span className="font-semibold">{selectedLanguage.name}</span>
      </button>

      {isOpen && (
        <div className="absolute left-[-25%] mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language)}
              className={`w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2 ${
                selectedLanguage.code === language.code
                  ? "text-[#EE7380] font-semibold"
                  : "text-gray-700"
              }`}
            >
              <ReactCountryFlag
                countryCode={language.flag}
                style={{
                  width: "28px",
                  height: "20px",
                }}
                svg
              />
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
