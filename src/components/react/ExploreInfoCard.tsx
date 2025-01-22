import { useState } from "react";

interface Props {
  tabs: Tab[];
}

type Tab = {
  title: string;
  visualContent: string;
  text: string;
};

const ExploreInfoCard = ({ tabs }: Props) => {
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <div className="bg-[#FFF8F8] text-[#0D0C22] rounded-xl p-6 shadow-md h-[456px] flex flex-col">
      <div className="flex space-x-4 border-b border-gray-200 pb-4 mb-4">
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            className={`text-lg font-['Urbanist'] font-semibold px-2 py-2 rounded-t-lg ${
              index === activeTabId
                ? "text-pink-500 border-b-2 border-pink-500"
                : ""
            }`}
            data-index={index}
            onClick={() => setActiveTabId(index)}>
            {tab.title}
          </button>
        ))}
      </div>

      <div className="flex flex-row h-full items-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="w-1/2 items-center flex flex-row justify-center">
          <div dangerouslySetInnerHTML={{ __html: tabs[activeTabId].visualContent }} />         
        </div>
        <div className="w-1/2">
          <h3
            id="tab-title"
            className="text-2xl font-['Urbanist'] font-semibold">
            {tabs[activeTabId].title}
          </h3>
          <p id="tab-text" className="mt-2 font-['Mulish']">
            {tabs[activeTabId].text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExploreInfoCard;
