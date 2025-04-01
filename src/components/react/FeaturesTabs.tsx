import Image from "astro/components/Image.astro";
import React, { useState } from "react";

type Props = {
  tabs: {
    id: number;
    title: string;
    description: string;
    icon: string;
    options?: {
      id: number;
      title: string;
      description: string;
    }[];
  }[];
};

const FeaturesTabs = ({ tabs }: Props) => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  return (
    <div className="flex flex-col w-full md:w-[45rem]">
      <div className="flex flex-row gap-4 lg:gap-10 justify-center lg:justify-normal items-center">
        {tabs.map((tab) => (
          <div
            className={`px-8 cursor-pointer py-4 text-xl lg:text-2xl font-semibold border-[#EE7380] ${
              currentTab === tab.id && "border-b-2"
            }`}
            onClick={() => setCurrentTab(tab.id)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center gap-8 min-h-[20rem] mt-10">
        <img src={tabs[currentTab].icon} alt="key" width={132} height={132} />
        <div className="flex flex-col gap-6">
          <span className="text-xl break-words">
            {tabs[currentTab].description}
          </span>
          {tabs[currentTab].options && (
            <div className="flex flex-col gap-4">
              {tabs[currentTab].options.map((option) => (
                <ul className="flex flex-col gap-4 items-left">
                  <li className="text-md">
                    <span className="font-semibold">{option.title}</span>
                    {option.description}
                  </li>
                </ul>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturesTabs;
