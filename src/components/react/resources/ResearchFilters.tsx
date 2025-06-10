import { useState } from "react";
import { ChevronDown } from "./icons/ChevronDown";
import type { Filters } from "./ResourcesTabs";
import { m } from "../../../paraglide/messages.js";

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
    { value: "blog", label: m["resources.postTypes.blog"]() },
    { value: "case-study", label: m["resources.postTypes.caseStudy"]() },
    { value: "trend-report", label: m["resources.postTypes.trendReport"]() },
  ];

  const locations = [
    { value: "global", label: m["resources.locations.global"]() },
    { value: "japan", label: m["resources.locations.japan"]() },
    { value: "korea", label: m["resources.locations.korea"]() },
    { value: "malaysia", label: m["resources.locations.malaysia"]() },
    { value: "singapore", label: m["resources.locations.singapore"]() },
    { value: "united-states", label: m["resources.locations.unitedStates"]() },
    { value: "north-america", label: m["resources.locations.northAmerica"]() },
  ];

  const interests = [
    { value: "art & design", label: m["resources.categories.art & design"]() },
    {
      value: "automobile & mobility",
      label: m["resources.categories.automobile & mobility"](),
    },
    { value: "baby & kids", label: m["resources.categories.baby & kids"]() },
    {
      value: "beauty & skincare",
      label: m["resources.categories.beauty & skincare"](),
    },
    {
      value: "business & innovation",
      label: m["resources.categories.business & innovation"](),
    },
    { value: "celebrities", label: m["resources.categories.celebrities"]() },
    { value: "community", label: m["resources.categories.community"]() },
    {
      value: "culture, religion & history",
      label: m["resources.categories.culture, religion & history"](),
    },
    {
      value: "current events",
      label: m["resources.categories.current events"](),
    },
    { value: "diy & crafts", label: m["resources.categories.diy & crafts"]() },
    { value: "education", label: m["resources.categories.education"]() },
    {
      value: "entertainment & media",
      label: m["resources.categories.entertainment & media"](),
    },
    {
      value: "family & relationships",
      label: m["resources.categories.family & relationships"](),
    },
    {
      value: "fashion & accessories",
      label: m["resources.categories.fashion & accessories"](),
    },
    {
      value: "film & television",
      label: m["resources.categories.film & television"](),
    },
    {
      value: "finance & investing",
      label: m["resources.categories.finance & investing"](),
    },
    {
      value: "food & beverage",
      label: m["resources.categories.food & beverage"](),
    },
    { value: "gaming", label: m["resources.categories.gaming"]() },
    { value: "hobby", label: m["resources.categories.hobby"]() },
    {
      value: "home & living",
      label: m["resources.categories.home & living"](),
    },
    {
      value: "it & technology",
      label: m["resources.categories.it & technology"](),
    },
    { value: "lifestyle", label: m["resources.categories.lifestyle"]() },
    {
      value: "motivation & inspiration",
      label: m["resources.categories.motivation & inspiration"](),
    },
    {
      value: "music & dance",
      label: m["resources.categories.music & dance"](),
    },
    {
      value: "nature & spirituality",
      label: m["resources.categories.nature & spirituality"](),
    },
    { value: "pets", label: m["resources.categories.pets"]() },
    {
      value: "sports & outdoors",
      label: m["resources.categories.sports & outdoors"](),
    },
    {
      value: "travel & tourism",
      label: m["resources.categories.travel & tourism"](),
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-16 mb-12">
      <CustomSelect
        value={localFilters.postType}
        onChange={(value) => handleChange("postType", value)}
        options={postTypes}
        label={m["resources.filters.postType"]()}
      />
      <CustomSelect
        value={localFilters.location}
        onChange={(value) => handleChange("location", value)}
        options={locations}
        label={m["resources.filters.location"]()}
      />
      <CustomSelect
        value={localFilters.interest}
        onChange={(value) => handleChange("interest", value)}
        options={interests}
        label={m["resources.filters.interest"]()}
      />
    </div>
  );
};

export default ResearchFilters;
