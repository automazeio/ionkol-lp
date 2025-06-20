import { useEffect, useState } from "react";
import Section from "./Section";
import type { Article } from "../../../../lib/directus";
import directus from "../../../../lib/directus";
import { readItems } from "@directus/sdk";
import ResearchFilters from "./ResearchFilters";
import Pagination from "./Pagination";
import Tab from "./Tab";
import { m } from "../../../paraglide/messages.js";

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
      title: m["resources.tabs.allPosts"](),
      postType: "all",
    },
    {
      id: 1,
      postType: "101",
      title: m["resources.tabs.ionkol101"](),
    },
    {
      id: 2,
      postType: "research",
      title: m["resources.tabs.research"](),
    },
    {
      id: 3,
      postType: "updates",
      title: m["resources.tabs.ionUpdates"](),
    },
  ];

  const handleChangeTab = (tab: number) => {
    setCurrentTab(tab);
  };

  return (
    <div className="flex flex-col items-center gap-24">
      <div className="grid grid-cols-4 gap-2 md:gap-6 lg:gap-10 bg-transparent rounded-full p-[2px]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setCurrentTab(tab.id);
            }}
            className={`${currentTab === tab.id ? "text-white bg-[#EE7380]" : "text-[#EE7380] border-[#FFA2AC]"} border-[1px] text-sm md:text-lg lg:text-xl font-semibold px-2 md:px-8 py-1 md:py-4 rounded-full transition-colors duration-200`}
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
