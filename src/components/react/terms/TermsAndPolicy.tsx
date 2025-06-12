import { useState } from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsKO from "./TermsKo";
import Terms from "./Terms";
import AdditionalProvision from "./AdditionalProvision";

const TermsAndPolicy = () => {
  const [currentTab, setCurrentTab] = useState<
    "terms" | "termsKO" | "policy" | "additionalProvision"
  >("terms");

  const sidebarOptions = [
    { key: "terms", label: "Terms of Service" },
    { key: "termsKO", label: "Terms of Service (KR)" },
    { key: "policy", label: "Privacy Policy" },
    {
      key: "additionalProvision",
      label: "Additional Provision Privacy Policy (KR)",
    },
  ] as const;

  const renderContent = () => {
    switch (currentTab) {
      case "terms":
        return <Terms />;
      case "termsKO":
        return <TermsKO />;
      case "policy":
        return <PrivacyPolicy />;
      case "additionalProvision":
        return <AdditionalProvision />;
      default:
        return <Terms />;
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-80 border-r">
        <nav className="p-4">
          <ul className="space-y-2">
            {sidebarOptions.map((option) => (
              <li key={option.key}>
                <button
                  onClick={() => setCurrentTab(option.key)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                    currentTab === option.key
                      ? "bg-blue-100 text-blue-700 border-l-4 border-blue-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                  }`}
                >
                  <span className="text-sm font-medium">{option.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">{renderContent()}</div>
      </div>
    </div>
  );
};

export default TermsAndPolicy;
