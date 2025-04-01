import React, { useState } from "react";
import { ReactCountryFlag } from "react-country-flag";

interface CountryCode {
  code: string;
  flag: string;
  name: string;
}

const countryCodes: CountryCode[] = [
  { code: "+81", flag: "jp", name: "Japan" },
  { code: "+60", flag: "my", name: "Malaysia" },
  { code: "+65", flag: "sg", name: "Singapore" },
  { code: "+82", flag: "kr", name: "South Korea" },
  { code: "+93", flag: "af", name: "Afghanistan" },
  { code: "+355", flag: "al", name: "Albania" },
  { code: "+213", flag: "dz", name: "Algeria" },
  { code: "+1-683", flag: "as", name: "American Samoa" },
  { code: "+376", flag: "ad", name: "Andorra" },
  { code: "+244", flag: "ao", name: "Angola" },
  { code: "+1-267", flag: "ag", name: "Antigua and Barbuda" },
  { code: "+54", flag: "ar", name: "Argentina" },
  { code: "+374", flag: "am", name: "Armenia" },
  { code: "+61", flag: "au", name: "Australia" },
  { code: "+43", flag: "at", name: "Austria" },
  { code: "+994", flag: "az", name: "Azerbaijan" },
  { code: "+973", flag: "bh", name: "Bahrain" },
  { code: "+880", flag: "bd", name: "Bangladesh" },
  { code: "+1-245", flag: "bb", name: "Barbados" },
  { code: "+375", flag: "by", name: "Belarus" },
  { code: "+32", flag: "be", name: "Belgium" },
  { code: "+501", flag: "bz", name: "Belize" },
  { code: "+229", flag: "bj", name: "Benin" },
  { code: "+1-440", flag: "bm", name: "Bermuda" },
  { code: "+975", flag: "bt", name: "Bhutan" },
  { code: "+591", flag: "bo", name: "Bolivia" },
  { code: "+387", flag: "ba", name: "Bosnia and Herzegovina" },
  { code: "+267", flag: "bw", name: "Botswana" },
  { code: "+55", flag: "br", name: "Brazil" },
  { code: "+246", flag: "io", name: "British Indian Ocean Territory" },
  { code: "+673", flag: "bn", name: "Brunei" },
  { code: "+359", flag: "bg", name: "Bulgaria" },
  { code: "+226", flag: "bf", name: "Burkina Faso" },
  { code: "+257", flag: "bi", name: "Burundi" },
  { code: "+238", flag: "cv", name: "Cabo Verde" },
  { code: "+855", flag: "kh", name: "Cambodia" },
  { code: "+237", flag: "cm", name: "Cameroon" },
  { code: "+1", flag: "ca", name: "Canada" },
  { code: "+236", flag: "cf", name: "Central African Republic" },
  { code: "+235", flag: "td", name: "Chad" },
  { code: "+44-1490", flag: "gb", name: "Channel Islands" },
  { code: "+56", flag: "cl", name: "Chile" },
  { code: "+86", flag: "cn", name: "China" },
  { code: "+57", flag: "co", name: "Colombia" },
  { code: "+269", flag: "km", name: "Comoros" },
  { code: "+506", flag: "cr", name: "Costa Rica" },
  { code: "+385", flag: "hr", name: "Croatia" },
  { code: "+53", flag: "cu", name: "Cuba" },
  { code: "+357", flag: "cy", name: "Cyprus" },
  { code: "+420", flag: "cz", name: "Czech Republic" },
  { code: "+243", flag: "cd", name: "Democratic Republic of the Congo" },
  { code: "+45", flag: "dk", name: "Denmark" },
  { code: "+253", flag: "dj", name: "Djibouti" },
  { code: "+1-766", flag: "dm", name: "Dominica" },
  { code: "+1-808", flag: "do", name: "Dominican Republic" },
  { code: "+670", flag: "tl", name: "East Timor" },
  { code: "+593", flag: "ec", name: "Ecuador" },
  { code: "+20", flag: "eg", name: "Egypt" },
  { code: "+503", flag: "sv", name: "El Salvador" },
  { code: "+240", flag: "gq", name: "Equatorial Guinea" },
  { code: "+291", flag: "er", name: "Eritrea" },
  { code: "+372", flag: "ee", name: "Estonia" },
  { code: "+268", flag: "sz", name: "Eswatini" },
  { code: "+251", flag: "et", name: "Ethiopia" },
  { code: "+500", flag: "fk", name: "Falkland Islands" },
  { code: "+691", flag: "fm", name: "Federated States of Micronesia" },
  { code: "+679", flag: "fj", name: "Fiji" },
  { code: "+358", flag: "fi", name: "Finland" },
  { code: "+33", flag: "fr", name: "France" },
  { code: "+241", flag: "ga", name: "Gabon" },
  { code: "+995", flag: "ge", name: "Georgia" },
  { code: "+49", flag: "de", name: "Germany" },
  { code: "+233", flag: "gh", name: "Ghana" },
  { code: "+350", flag: "gi", name: "Gibraltar" },
  { code: "+30", flag: "gr", name: "Greece" },
  { code: "+299", flag: "gl", name: "Greenland" },
  { code: "+1-472", flag: "gd", name: "gd" },
  { code: "+1-670", flag: "gu", name: "Guam" },
  { code: "+502", flag: "gt", name: "Guatemala" },
  { code: "+224", flag: "gn", name: "Guinea" },
  { code: "+245", flag: "gw", name: "Guinea-Bissau" },
  { code: "+592", flag: "gy", name: "Guyana" },
  { code: "+509", flag: "ht", name: "Haiti" },
  { code: "+504", flag: "hn", name: "Honduras" },
  { code: "+852", flag: "hk", name: "Hong Kong" },
  { code: "+36", flag: "hu", name: "Hungary" },
  { code: "+354", flag: "is", name: "Iceland" },
  { code: "+91", flag: "in", name: "India" },
  { code: "+62", flag: "id", name: "Indonesia" },
  { code: "+98", flag: "ir", name: "Iran" },
  { code: "+964", flag: "iq", name: "Iraq" },
  { code: "+353", flag: "ie", name: "Ireland" },
  { code: "+44-1580", flag: "im", name: "Isle of Man" },
  { code: "+972", flag: "il", name: "Israel" },
  { code: "+39", flag: "it", name: "Italy" },
  { code: "+225", flag: "ci", name: "Ivory Coast" },
  { code: "+1-875", flag: "jm", name: "Jamaica" },
  { code: "+962", flag: "jo", name: "Jordan" },
  { code: "+7", flag: "kz", name: "Kazakhstan" },
  { code: "+254", flag: "ke", name: "Kenya" },
  { code: "+686", flag: "ki", name: "Kiribati" },
  { code: "+383", flag: "xk", name: "Kosovo" },
  { code: "+965", flag: "kw", name: "Kuwait" },
  { code: "+996", flag: "kg", name: "Kyrgyzstan" },
  { code: "+856", flag: "la", name: "Laos" },
  { code: "+371", flag: "lv", name: "Latvia" },
  { code: "+961", flag: "lb", name: "Lebanon" },
  { code: "+266", flag: "ls", name: "Lesotho" },
  { code: "+231", flag: "lr", name: "Liberia" },
  { code: "+218", flag: "ly", name: "Libya" },
  { code: "+423", flag: "li", name: "Liechtenstein" },
  { code: "+370", flag: "lt", name: "Lithuania" },
  { code: "+352", flag: "lu", name: "Luxembourg" },
  { code: "+853", flag: "mo", name: "Macau" },
  { code: "+261", flag: "mg", name: "Madagascar" },
  { code: "+265", flag: "mw", name: "Malawi" },
  { code: "+960", flag: "mv", name: "Maldives" },
  { code: "+223", flag: "ml", name: "Mali" },
  { code: "+356", flag: "mt", name: "Malta" },
  { code: "+692", flag: "mh", name: "Marshall Islands" },
  { code: "+222", flag: "mr", name: "Mauritania" },
  { code: "+230", flag: "mu", name: "Mauritius" },
  { code: "+52", flag: "mx", name: "Mexico" },
  { code: "+373", flag: "md", name: "Moldova" },
  { code: "+377", flag: "mc", name: "Monaco" },
  { code: "+976", flag: "mn", name: "Mongolia" },
  { code: "+382", flag: "me", name: "Montenegro" },
  { code: "+1-663", flag: "ms", name: "Montserrat" },
  { code: "+212", flag: "ma", name: "Morocco" },
  { code: "+258", flag: "mz", name: "Mozambique" },
  { code: "+95", flag: "mm", name: "Myanmar" },
  { code: "+264", flag: "na", name: "Namibia" },
  { code: "+674", flag: "nr", name: "Nauru" },
  { code: "+977", flag: "np", name: "Nepal" },
  { code: "+31", flag: "nl", name: "Netherlands" },
  { code: "+64", flag: "nz", name: "New Zealand" },
  { code: "+505", flag: "ni", name: "Nicaragua" },
  { code: "+227", flag: "ne", name: "Niger" },
  { code: "+234", flag: "ng", name: "Nigeria" },
  { code: "+850", flag: "kp", name: "North Korea" },
  { code: "+389", flag: "mk", name: "North Macedonia" },
  { code: "+1-669", flag: "mp", name: "Northern Mariana Islands" },
  { code: "+47", flag: "no", name: "Norway" },
  { code: "+968", flag: "om", name: "Oman" },
  { code: "+92", flag: "pk", name: "Pakistan" },
  { code: "+680", flag: "pw", name: "Palau" },
  { code: "+507", flag: "pa", name: "Panama" },
  { code: "+675", flag: "pg", name: "Papua New Guinea" },
  { code: "+595", flag: "py", name: "Paraguay" },
  { code: "+51", flag: "pe", name: "Peru" },
  { code: "+63", flag: "ph", name: "Philippines" },
  { code: "+64", flag: "pn", name: "Pitcairn Islands" },
  { code: "+48", flag: "pl", name: "Poland" },
  { code: "+351", flag: "pt", name: "Portugal" },
  { code: "+1-786", flag: "pr", name: "Puerto Rico" },
  { code: "+974", flag: "qa", name: "Qatar" },
  { code: "+242", flag: "cg", name: "Republic of the Congo" },
  { code: "+40", flag: "ro", name: "Romania" },
  { code: "+7", flag: "ru", name: "Russia" },
  { code: "+250", flag: "rw", name: "Rwanda" },
  { code: "+290", flag: "sh", name: "Saint Helena" },
  { code: "+1-868", flag: "kn", name: "Saint Kitts and Nevis" },
  { code: "+1-757", flag: "lc", name: "Saint Lucia" },
  { code: "+508", flag: "pm", name: "Saint Pierre and Miquelon" },
  { code: "+1-783", flag: "vc", name: "Saint Vincent and the Grenadines" },
  { code: "+685", flag: "ws", name: "Samoa" },
  { code: "+378", flag: "sm", name: "San Marino" },
  { code: "+239", flag: "st", name: "Sao Tome and Principe" },
  { code: "+966", flag: "sa", name: "Saudi Arabia" },
  { code: "+221", flag: "sn", name: "Senegal" },
  { code: "+381", flag: "rs", name: "Serbia" },
  { code: "+248", flag: "sc", name: "Seychelles" },
  { code: "+232", flag: "sl", name: "Sierra Leone" },
  { code: "+421", flag: "sk", name: "Slovakia" },
  { code: "+386", flag: "si", name: "Slovenia" },
  { code: "+677", flag: "sb", name: "Solomon Islands" },
  { code: "+252", flag: "so", name: "Somalia" },
  { code: "+27", flag: "za", name: "South Africa" },
  { code: "+211", flag: "ss", name: "South Sudan" },
  { code: "+34", flag: "es", name: "Spain" },
  { code: "+94", flag: "lk", name: "Sri Lanka" },
  { code: "+249", flag: "sd", name: "Sudan" },
  { code: "+597", flag: "sr", name: "Suriname" },
  { code: "+46", flag: "se", name: "Sweden" },
  { code: "+41", flag: "ch", name: "Switzerland" },
  { code: "+963", flag: "sy", name: "Syria" },
  { code: "+886", flag: "tw", name: "Taiwan" },
  { code: "+992", flag: "tj", name: "Tajikistan" },
  { code: "+255", flag: "tz", name: "Tanzania" },
  { code: "+66", flag: "th", name: "Thailand" },
  { code: "+1-241", flag: "bs", name: "The Bahamas" },
  { code: "+220", flag: "gm", name: "The Gambia" },
  { code: "+228", flag: "tg", name: "Togo" },
  { code: "+690", flag: "tk", name: "Tokelau" },
  { code: "+676", flag: "to", name: "Tonga" },
  { code: "+1-867", flag: "tt", name: "Trinidad and Tobago" },
  { code: "+216", flag: "tn", name: "Tunisia" },
  { code: "+90", flag: "tr", name: "Turkiye" },
  { code: "+993", flag: "tm", name: "Turkmenistan" },
  { code: "+688", flag: "tv", name: "Tuvalu" },
  { code: "+256", flag: "ug", name: "Uganda" },
  { code: "+380", flag: "ua", name: "Ukraine" },
  { code: "+971", flag: "ae", name: "United Arab Emirates" },
  { code: "+44", flag: "gb", name: "United Kingdom" },
  { code: "+1", flag: "us", name: "United States" },
  { code: "+598", flag: "uy", name: "Uruguay" },
  { code: "+998", flag: "uz", name: "Uzbekistan" },
  { code: "+678", flag: "vu", name: "Vanuatu" },
  { code: "+379", flag: "va", name: "Vatican City" },
  { code: "+58", flag: "ve", name: "Venezuela" },
  { code: "+84", flag: "vn", name: "Vietnam" },
  { code: "+1-339", flag: "vi", name: "Virgin Islands" },
  { code: "+967", flag: "ye", name: "Yemen" },
  { code: "+260", flag: "zm", name: "Zambia" },
  { code: "+263", flag: "zw", name: "Zimbabwe" },
];

interface PhoneInputProps {
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
        <div className="absolute z-50 w-48 mt-1 bg-white rounded-2xl shadow-lg max-h-60 overflow-auto">
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
