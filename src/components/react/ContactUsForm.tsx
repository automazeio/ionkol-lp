import { useState } from "react";
import Dropdown from "./Dropdown.js";
import PhoneInput from "./PhoneInput.js";
import { m } from "../../paraglide/messages.js";
type GeneralInquiryFormProps = {
  countries: {
    code: string;
    flag: string;
    name: string;
  }[];
};

type Props = GeneralInquiryFormProps;

const GeneralInquiryForm = ({ countries }: GeneralInquiryFormProps) => {
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
  const [isOtherSource, setIsOtherSource] = useState(false);
  const [otherSource, setOtherSource] = useState("");
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
    m["contact.form.sourceOptions.google"](),
    m["contact.form.sourceOptions.onlineAd"](),
    m["contact.form.sourceOptions.influencerRecommendation"](),
    m["contact.form.sourceOptions.friendRecommendation"](),
    m["contact.form.sourceOptions.event"](),
    m["contact.form.sourceOptions.media"](),
    m["contact.form.sourceOptions.email"](),
    m["contact.form.sourceOptions.other"](),
  ];

  const countryOptions = countries.map((country) => country.name);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl p-8 space-y-3 lg:space-y-6 bg-[#FFE2E5] border-[#FFA2AC] rounded-[32px] border-[1px]"
    >
      <div className="grid grid-cols-2 gap-3 lg:gap-6">
        {/* First Name */}
        <input
          type="text"
          name="firstName"
          placeholder={m["contact.form.firstName"]()}
          required
          className="w-full px-4 py-3 bg-white rounded-full"
          value={formData.firstName}
          onChange={handleInputChange}
        />

        {/* Last Name */}
        <input
          type="text"
          name="lastName"
          placeholder={m["contact.form.lastName"]()}
          required
          className="w-full px-4 py-3 bg-white rounded-full"
          value={formData.lastName}
          onChange={handleInputChange}
        />

        {/* Company */}
        <input
          type="text"
          name="company"
          placeholder={m["contact.form.company"]()}
          className="w-full px-4 py-3 bg-white rounded-full"
          value={formData.company}
          onChange={handleInputChange}
        />

        {/* Position */}
        <input
          type="text"
          name="position"
          placeholder={m["contact.form.position"]()}
          className="w-full px-4 py-3 bg-white rounded-full"
          value={formData.position}
          onChange={handleInputChange}
        />

        {/* Phone */}
        <div className="col-span-2 lg:col-span-1">
          <PhoneInput
            value={formData.phone}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, phone: value }))
            }
            countryCode={countryCode}
            onCountryCodeChange={setCountryCode}
            countryCodes={countries}
          />
        </div>

        {/* Country */}
        <div className="col-span-2 lg:col-span-1">
          <Dropdown
            options={countryOptions}
            value={formData.country}
            onChange={(value) =>
              setFormData((prev) => ({ ...prev, country: value }))
            }
            placeholder={m["contact.form.country"]()}
          />
        </div>
      </div>

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder={m["contact.form.email"]()}
        required
        className="w-full px-4 py-3 bg-white rounded-full"
        value={formData.email}
        onChange={handleInputChange}
      />

      {/* How did you find us */}
      <Dropdown
        options={sourceOptions}
        value={formData.source}
        onChange={(value) => {
          setFormData((prev) => ({ ...prev, source: value }));
          setIsOtherSource(value === m["contact.form.sourceOptions.other"]());
        }}
        placeholder={m["contact.form.source"]()}
      />
      {isOtherSource && (
        <input
          type="text"
          name="sourceOther"
          placeholder={m["contact.form.sourceOther"]()}
          className="w-full px-4 py-3 bg-white rounded-full"
          value={otherSource}
          onChange={(e) => setOtherSource(e.target.value)}
        />
      )}

      {/* Inquiry */}
      <textarea
        name="inquiry"
        placeholder={m["contact.form.inquiry"]()}
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
        <p className="text-xl text-start">
          <span className="text-start">{m["contact.form.consent.text"]()}</span>
        </p>
      </div>

      <button
        type="submit"
        className="w-1/2 px-8 py-3 bg-[#EE7380] text-white rounded-full text-xl font-semibold hover:bg-[#d65f6b] transition-colors"
      >
        {m["contact.form.submit"]()}
      </button>
    </form>
  );
};

const ContactUsForm = ({ countries }: Props) => {
  return <GeneralInquiryForm countries={countries} />;
};

export default ContactUsForm;
