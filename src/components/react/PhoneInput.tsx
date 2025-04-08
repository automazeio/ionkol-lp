import React, { useState } from "react";
import { ReactCountryFlag } from "react-country-flag";
import { m } from "../../paraglide/messages";

interface CountryCode {
  code: string;
  flag: string;
  name: string;
}

interface PhoneInputProps {
  countryCodes: CountryCode[];
  value: string;
  onChange: (value: string) => void;
  countryCode: string;
  onCountryCodeChange: (code: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  countryCode,
  onCountryCodeChange,
  countryCodes,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedCountry = countryCodes.find((c) => c.code === countryCode);

  return (
    <div className="relative w-full">
      <div className="relative flex items-center w-full bg-white rounded-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 pl-4 pr-2 py-3 border-r border-gray-200"
        >
          {selectedCountry && (
            <ReactCountryFlag
              countryCode={selectedCountry.flag}
              style={{
                width: "28px",
                height: "20px",
              }}
              svg
            />
          )}

          <span className="text-gray-700">{countryCode}</span>
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <input
          type="tel"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Phone number"
          className="flex-1 px-3 py-3 rounded-full focus:outline-none"
        />
      </div>

      {isOpen && (
        <div className="absolute z-50 w-[24rem] mt-1 bg-white rounded-2xl shadow-lg max-h-60 overflow-auto">
          {countryCodes.map((country) => (
            <button
              key={country.code}
              type="button"
              className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none flex items-center gap-2"
              onClick={() => {
                onCountryCodeChange(country.code);
                setIsOpen(false);
              }}
            >
              <ReactCountryFlag
                countryCode={country.flag}
                style={{
                  width: "28px",
                  height: "20px",
                }}
                svg
              />
              <span>{country.name}</span>
              <span className="text-gray-500 ml-auto">{country.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhoneInput;
