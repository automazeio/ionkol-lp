import { useState } from "react";
import Dropdown from "./Dropdown";
import PhoneInput from "./PhoneInput";

const GeneralInquiryForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    position: "",
    phone: "",
    country: "",
    email: "",
    source: "",
    inquiry: "",
    consent: false,
  });

  const [countryCode, setCountryCode] = useState("+65");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const sourceOptions = [
    "Google / Search Engine",
    "Online Ad",
    "Influencer Recommendation",
    "Friend / Family Recommendation",
    "Event or Conference",
    "Podcast, Blog, or News Article",
    "Email or Newsletter",
    "Other (Please specify)",
  ];

  const countryOptions = [
    "Singapore",
    "Malaysia",
    "China",
    "Japan",
    "South Korea",
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl p-8 space-y-6 bg-[#FFE2E5] border-[#FFA2AC] rounded-[32px] border-[1px]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <input
          type="text"
          name="firstName"
          placeholder="First Name*"
          required
          className="w-full px-4 py-3 bg-white rounded-full"
          value={formData.firstName}
          onChange={handleInputChange}
        />

        {/* Last Name */}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name*"
          required
          className="w-full px-4 py-3 bg-white rounded-full"
          value={formData.lastName}
          onChange={handleInputChange}
        />

        {/* Company */}
        <input
          type="text"
          name="company"
          placeholder="Company / Brand Name"
          className="w-full px-4 py-3 bg-white rounded-full"
          value={formData.company}
          onChange={handleInputChange}
        />

        {/* Position */}
        <input
          type="text"
          name="position"
          placeholder="Position"
          className="w-full px-4 py-3 bg-white rounded-full"
          value={formData.position}
          onChange={handleInputChange}
        />

        {/* Phone */}
        <PhoneInput
          value={formData.phone}
          onChange={(value) =>
            setFormData((prev) => ({ ...prev, phone: value }))
          }
          countryCode={countryCode}
          onCountryCodeChange={setCountryCode}
        />

        {/* Country */}
        <Dropdown
          options={countryOptions}
          value={formData.country}
          onChange={(value) =>
            setFormData((prev) => ({ ...prev, country: value }))
          }
          placeholder="Country"
        />
      </div>

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email*"
        required
        className="w-full px-4 py-3 bg-white rounded-full"
        value={formData.email}
        onChange={handleInputChange}
      />

      {/* How did you find us */}
      <Dropdown
        options={sourceOptions}
        value={formData.source}
        onChange={(value) =>
          setFormData((prev) => ({ ...prev, source: value }))
        }
        placeholder="How did you find out about us?"
      />

      {/* Inquiry */}
      <textarea
        name="inquiry"
        placeholder="Inquiry*"
        required
        className="w-full px-4 py-3 bg-white rounded-3xl min-h-[200px]"
        value={formData.inquiry}
        onChange={handleInputChange}
      />

      {/* Consent Checkbox */}
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          name="consent"
          required
          className="w-6 h-6 rounded border-[#EE7380] border-[1px] text-[#EE7380] focus:ring-[#EE7380]"
          checked={formData.consent}
          onChange={handleInputChange}
        />
        <div className="text-xl flex-col items-start flex md:flex-row gap-1 flex-wrap">
          <span className="text-start">
            *I confirm that I have read, consent and agree to
          </span>
          <div className="flex flex-row items-center">
            <img
              src="/ionkolLogoNewShort.svg"
              alt="features"
              width={90}
              height={24}
            />
            <span>'s</span>
          </div>
          <span>Terms of service and Privacy Policy</span>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-1/2 px-8 py-3 bg-[#EE7380] text-white rounded-full text-xl font-semibold hover:bg-[#d65f6b] transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

const ContactUsTabs = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  return (
    <div className="flex flex-col items-center gap-24">
      <div className="grid grid-cols-2 bg-transparent border-[#EE7380] border-[1px] rounded-full p-[2px]">
        <button
          onClick={() => setCurrentTab(0)}
          className={`${currentTab === 0 ? "text-white bg-[#EE7380]" : "text-[#EE7380]"} relative text-xl font-semibold z-10 px-10 py-4 rounded-full transition-colors duration-200 focus:outline-none`}
        >
          General Inquiry
        </button>
        <button
          onClick={() => setCurrentTab(1)}
          className={`${currentTab === 1 ? "text-white bg-[#EE7380]" : "text-[#EE7380]"} relative text-xl font-semibold z-10 px-10 py-4 rounded-full transition-colors duration-200 focus:outline-none`}
        >
          Demo
        </button>
      </div>
      {currentTab === 0 ? <GeneralInquiryForm /> : "Demo Form Coming Soon"}
    </div>
  );
};

export default ContactUsTabs;
