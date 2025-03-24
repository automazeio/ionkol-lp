import { useState } from "react";
import { ChevronDown } from "./icons/ChevronDown";
import type { Filters } from "./ResourcesTabs";

const interests = [
  "Art & Design",
  "Automobile & Mobility",
  "Baby & Kids",
  "Beauty & Skincare",
  "Business & Innovation",
  "Celebrities",
  "Community",
  "Creatives & Creators",
  "Culture, Religion & History",
  "Current Events",
  "DIY & Crafts",
  "Education",
  "Entertainment & Media",
  "Family & Relationships",
  "Fashion & Accessories",
  "Film & Television",
  "Finance & Investing",
  "Fitness & Well-being",
  "Food & Beverage",
  "Gaming",
  "Hobby",
  "Home & Living",
  "IT & Technology",
  "Lifestyle",
  "Motivation & Inspiration",
  "Music & Dance",
  "Nature & Spirituality",
  "Pets",
  "Sports & Outdoors",
  "Travel & Tourism",
];

type FilterProps = {
  onFilterChange: (filters: {
    postType: string;
    location: string;
    interest: string;
  }) => void;
  filters: Filters;
};

const CustomSelect = ({
  value,
  onChange,
  options,
  label,
}: {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  label: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log("label", label, value);

  const selectedOption =
    options.find((opt) => opt.value === value)?.label || label;

  return (
    <div className="relative min-w-[200px]">
      <div
        className="relative cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`
          w-full text-xl bg-transparent pb-2 text-[#333] 
          border-b-2 transition-colors duration-200
          ${isOpen ? "border-[#EE7380]" : "border-[#FF8B98]"}
          ${isOpen ? "text-[#EE7380]" : "text-[#333]"}
          hover:border-[#EE7380] hover:text-[#EE7380]
        `}
        >
          {selectedOption}
          <div
            className={`
            absolute top-1 right-0 transition-transform duration-200
            ${isOpen ? "transform rotate-180" : ""}
          `}
          >
            <ChevronDown
              className={`
              w-5 h-5 transition-colors duration-200
              ${isOpen ? "text-[#EE7380]" : "text-[#FF8B98]"}
            `}
            />
          </div>
        </div>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div
            className="
            absolute z-20 w-full mt-2 bg-white rounded-lg shadow-lg
            border border-[#FFE5E8] py-2 max-h-[300px] overflow-y-auto
            scrollbar-thin scrollbar-thumb-[#FFE5E8] scrollbar-track-transparent
          "
          >
            <div
              className={`
                px-4 py-2 hover:bg-[#FFF5F6] cursor-pointer
                ${value === "all" ? "text-[#EE7380]" : "text-[#333]"}
              `}
              onClick={() => {
                onChange("all");
                setIsOpen(false);
              }}
            >
              {label}
            </div>
            {options.map((option) => (
              <div
                key={option.value}
                className={`
                  px-4 py-2 hover:bg-[#FFF5F6] cursor-pointer
                  ${value === option.value ? "text-[#EE7380]" : "text-[#333]"}
                `}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ResearchFilters = ({ onFilterChange, filters }: FilterProps) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleChange = (field: keyof typeof localFilters, value: string) => {
    const newFilters = { ...localFilters, [field]: value };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const postTypes = [
    { value: "blog", label: "Blog" },
    { value: "case-study", label: "Case Study" },
    { value: "trend-report", label: "Trend Report" },
  ];

  const locations = [
    { value: "global", label: "Global" },
    { value: "japan", label: "Japan" },
    { value: "korea", label: "Korea" },
    { value: "malaysia", label: "Malaysia" },
    { value: "singapore", label: "Singapore" },
    { value: "united-states", label: "United States" },
    { value: "north-america", label: "North America" },
  ];

  const interestOptions = interests.map((interest) => ({
    value: interest.toLowerCase(),
    label: interest,
  }));

  return (
    <div className="flex flex-wrap justify-center gap-16 mb-12">
      <CustomSelect
        value={localFilters.postType}
        onChange={(value) => handleChange("postType", value)}
        options={postTypes}
        label="Post Type"
      />
      <CustomSelect
        value={localFilters.location}
        onChange={(value) => handleChange("location", value)}
        options={locations}
        label="Location"
      />
      <CustomSelect
        value={localFilters.interest}
        onChange={(value) => handleChange("interest", value)}
        options={interestOptions}
        label="Interest"
      />
    </div>
  );
};

export default ResearchFilters;
