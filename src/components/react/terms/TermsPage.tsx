import PrivacyPolicy from "./PrivacyPolicy";
import Terms from "./Terms";
import TermsKO from "./TermsKo";

const TermsPage = () => {
  const sidebarOptions = [
    { key: "terms", label: "Terms of Service", link: "/terms" },
    { key: "termsKO", label: "Terms of Service (KR)", link: "/termsko" },
    { key: "policy", label: "Privacy Policy", link: "/privacy" },
    {
      key: "additionalProvision",
      label: "Additional Provision Privacy Policy (KR)",
      link: "/privacyadditional",
    },
  ];

  return (
    <div className="flex min-h-screen">
      <div className="w-80 border-r">
        <nav className="p-4 flex flex-col gap-y-3">
          {sidebarOptions.map((option) => (
            <a
              href={option.link}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                "terms" === option.key
                  ? "bg-blue-100 text-blue-700 border-l-4 border-blue-700"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
              }`}
            >
              {option.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <Terms />
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
