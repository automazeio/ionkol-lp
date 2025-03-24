import { useEffect, useState } from "react";
import Section from "./Section";
import type { Article } from "../../../../lib/directus";
import directus from "../../../../lib/directus";
import { readItems } from "@directus/sdk";
import ResearchFilters from "./ResearchFilters";
import Pagination from "./Pagination";
import Tab from "./Tab";

export type Filters = {
  postType: string;
  location: string;
  interest: string;
};

const ResourcesTabs = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const tabs: {
    id: number;
    title: string;
    postType: "all" | "101" | "research" | "updates";
  }[] = [
    {
      id: 0,
      title: "All posts",
      postType: "all",
    },
    {
      id: 1,
      postType: "101",
      title: "IONKOL 101",
    },
    {
      id: 2,
      postType: "research",
      title: "Research",
    },
    {
      id: 3,
      postType: "updates",
      title: "ION Updates",
    },
  ];

  const handleChangeTab = (tab: number) => {
    setCurrentTab(tab);
  };

  return (
    <div className="flex flex-col items-center gap-24">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 bg-transparent rounded-full p-[2px]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setCurrentTab(tab.id);
            }}
            className={`${currentTab === tab.id ? "text-white bg-[#EE7380]" : "text-[#EE7380] border-[#FFA2AC]"} border-[1px] text-xl font-semibold px-8 py-4 rounded-full transition-colors duration-200`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="w-full">
        <Tab
          postType={tabs[currentTab].postType}
          setCurrentTab={handleChangeTab}
        />
      </div>
    </div>
  );
};

export default ResourcesTabs;
