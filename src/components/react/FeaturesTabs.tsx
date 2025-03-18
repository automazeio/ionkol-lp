import Image from "astro/components/Image.astro";
import React, { useState } from "react";

type Props = {
  tabs: {
    id: number;
    title: string;
    description: string;
    icon: string;
  }[];
};

const FeaturesTabs = ({ tabs }: Props) => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  return (
    <div className="flex flex-col w-full md:w-[38rem]">
      <div className="flex flex-row gap-4 lg:gap-10 justify-center lg:justify-normal items-center">
        {tabs.map((tab) => (
          <div
            className={`px-8 cursor-pointer py-4 text-xl lg:text-2xl font-semibold border-[#EE7380] ${
              currentTab === tab.id && "border-b-2"
            }`}
            onClick={() => setCurrentTab(tab.id)}>
            {tab.title}
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center gap-8 min-h-72">
        <img src={tabs[currentTab].icon} alt="key" width={132} height={132} />
        <span className="text-xl break-words">
          {tabs[currentTab].description}
        </span>
      </div>
    </div>
  );
};

export default FeaturesTabs;
