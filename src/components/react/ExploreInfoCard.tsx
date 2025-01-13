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
          {/* <img
            src={tabs[activeTabId].imageLink}
            alt={tabs[activeTabId].title}
          /> */}
          {/* {tabs[activeTabId].visualContent} */}
          {/* <div dangerouslySetInnerHTML={{ __html: tabs[activeTabId].visualContent }} /> */}
          <div className="w-[291px] h-[233px] relative">
            <div className="absolute left-4 top-0 w-11 h-11 flex justify-center items-center rounded-xl bg-white rotate-[4.61deg]">
              <svg
                width="14"
                height="16"
                className="rotate-[-4.61deg]"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.4345 1.30909L4.02864 0.792879C2.61323 0.678821 1.37045 1.74243 1.25693 3.1512L0.502426 12.5142C0.406038 13.7103 1.22256 14.2844 2.31908 13.7909L5.70702 12.2514C6.06809 12.0865 6.62628 12.1315 6.94966 12.3515L10.0474 14.4137C11.0502 15.083 11.9481 14.6471 12.045 13.4443L12.7995 4.08134C12.9064 2.67204 11.85 1.42315 10.4345 1.30909Z"
                  stroke="#0D0C22"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
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
