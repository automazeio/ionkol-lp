import { useState } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  preview?: string;
};

const Accordion = ({
  title,
  children,
  defaultOpen = false,
  preview,
}: Props) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full border-b border-[#FFE5E8]">
      <button
        className="w-full py-4 flex justify-between items-start text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <span className="text-[26px] font-semibold text-[#EE7380]">
            {title}
          </span>
          {!isOpen && preview && (
            <p className="mt-4 text-[26px] text-gray-600 line-clamp-2">
              {preview}
            </p>
          )}
        </div>
        <svg
          className={`w-5 h-5 mt-2 text-[#EE7380] ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div className={`overflow-hidden ${isOpen ? "max-h-full" : "max-h-0"}`}>
        <div className="pb-4 text-[26px]">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
