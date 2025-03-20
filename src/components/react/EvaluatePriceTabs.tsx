import Image from "astro/components/Image.astro";
import React, { useState } from "react";

const ManualWorkTabContent = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-4 text-center items-center text-2xl relative">
        {/* Vertical separator line */}
        <div className="absolute top-0 bottom-0 right-[24%] lg:right-[22%] w-[2px] bg-[#EE7380]"></div>

        <div className="font-semibold pb-4">Manual Work</div>
        <div className="font-semibold pb-4">Time Per Month</div>
        <div className="font-semibold pb-4">
          Monthly Cost{" "}
          <span className="text-xl font-normal">(25 USD / hour)</span>
        </div>
        <div className="flex justify-center pb-4">
          <img
            src="/ionkolLogoNewShort.svg"
            alt="pricing"
            width={180}
            height={30}
          />
        </div>

        {/* Creator Search */}
        <div>Creator Search</div>
        <div>40</div>
        <div>1,000</div>
        <div className="text-[#EE7380] font-bold">Minutes</div>

        {/* Data Compilation */}
        <div>Data Compilation</div>
        <div>8</div>
        <div>500</div>
        <div className="text-[#EE7380] font-bold">Minutes</div>

        {/* Analysis */}
        <div>Analysis</div>
        <div>20</div>
        <div>200</div>
        <div className="text-[#EE7380] font-bold">Minutes</div>

        {/* Total row */}
        <div className="font-semibold pt-4">Total</div>
        <div className="font-semibold pt-4">68</div>
        <div className="font-semibold pt-4">$1,700 / month</div>
        <div className="text-[#EE7380] pt-4">
          <span className="font-semibold">$80 ~</span>/ month
        </div>
      </div>
    </div>
  );
};

const AlternativesTabContent = () => {
  return (
    <div>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-10 text-center items-center text-2xl relative">
        {/* Vertical separator line */}
        <div className="absolute top-0 bottom-0 right-[29%] md:right-[32%] lg:right-[48.5%] w-[2px] bg-[#EE7380]"></div>

        <div className="font-semibold pb-4">Alternatives</div>
        <div className="font-semibold pb-4">Competitors</div>
        <div className="flex justify-center pb-4 lg:col-span-2">
          <img
            src="/ionkolLogoNewShort.svg"
            alt="pricing"
            width={180}
            height={30}
          />
        </div>

        <div>Countries</div>
        <div>Local joint ventures</div>
        <div className="text-[#EE7380] font-bold lg:col-span-2">
          Presence in 4 countries across Asia
        </div>

        <div>Parameters</div>
        <div>12~ basic parameters</div>
        <div className="text-[#EE7380] font-bold lg:col-span-2">
          40+ advanced parameters
        </div>

        <div>Cost</div>
        <div>$200~ / month</div>
        <div className="text-[#EE7380] font-bold lg:col-span-2">
          $80 / month
        </div>
      </div>
    </div>
  );
};

const EvaluatePriceTabs = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  return (
    <div className="flex flex-col items-center gap-24">
      <div className="relative inline-flex w-fit bg-transparent border-[#EE7380] border-[1px] rounded-full p-[2px]">
        <button
          onClick={() => setCurrentTab(0)}
          className={`${currentTab === 0 ? "text-white bg-[#EE7380]" : "text-[#EE7380]"} relative text-xl font-semibold z-10 px-12 py-4 rounded-full transition-colors duration-200 focus:outline-none`}
        >
          Manual Work
        </button>
        <button
          onClick={() => setCurrentTab(1)}
          className={`${currentTab === 1 ? "text-white bg-[#EE7380]" : "text-[#EE7380]"} relative text-xl font-semibold z-10 px-12 py-4 rounded-full transition-colors duration-200 focus:outline-none`}
        >
          Alternatives
        </button>
      </div>
      {currentTab === 0 ? <ManualWorkTabContent /> : <AlternativesTabContent />}
    </div>
  );
};

export default EvaluatePriceTabs;
