import Image from "astro/components/Image.astro";
import React, { useState } from "react";
import { m } from "../../paraglide/messages.js";

const ManualWorkTabContent = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-4 text-center items-center text-lg md:text-2xl relative">
        {/* Vertical separator line */}
        <div className="absolute top-0 bottom-0 right-[24%] lg:right-[22%] w-[2px] bg-[#EE7380]"></div>

        <div className="font-semibold pb-4">
          {m["pricing.evaluate.tabs.manualWork"]()}
        </div>
        <div className="font-semibold pb-4">
          {m["pricing.evaluate.manualWork.timePerMonth"]()}
        </div>
        <div className="font-semibold pb-4">
          {m["pricing.evaluate.manualWork.monthlyCost"]()}{" "}
          <span className="text-xl font-normal">
            {m["pricing.evaluate.manualWork.hourlyRate"]()}
          </span>
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
        <div>{m["pricing.evaluate.manualWork.creatorSearch"]()}</div>
        <div>40</div>
        <div>1,000</div>
        <div className="text-[#EE7380] font-bold">
          {m["pricing.evaluate.manualWork.minutes"]()}
        </div>

        {/* Data Compilation */}
        <div>{m["pricing.evaluate.manualWork.dataCompilation"]()}</div>
        <div>8</div>
        <div>500</div>
        <div className="text-[#EE7380] font-bold">
          {m["pricing.evaluate.manualWork.minutes"]()}
        </div>

        {/* Analysis */}
        <div>{m["pricing.evaluate.manualWork.analysis"]()}</div>
        <div>20</div>
        <div>200</div>
        <div className="text-[#EE7380] font-bold">
          {m["pricing.evaluate.manualWork.minutes"]()}
        </div>

        {/* Total row */}
        <div className="font-semibold pt-4">
          {m["pricing.evaluate.manualWork.total"]()}
        </div>
        <div className="font-semibold pt-4">68</div>
        <div className="font-semibold pt-4">
          {m["pricing.evaluate.manualWork.monthlyTotal"]()}
        </div>
        <div className="text-[#EE7380] pt-4">
          <span className="font-semibold">
            {m["pricing.evaluate.manualWork.ionTotal"]()}
          </span>
        </div>
      </div>
    </div>
  );
};

const AlternativesTabContent = () => {
  return (
    <div>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-10 text-center items-center text-lg md:text-2xl relative">
        {/* Vertical separator line */}
        <div className="absolute top-0 bottom-0 right-[29%] md:right-[32%] lg:right-[48.5%] w-[2px] bg-[#EE7380]"></div>

        <div className="font-semibold pb-4">
          {m["pricing.evaluate.tabs.alternatives"]()}
        </div>
        <div className="font-semibold pb-4">
          {m["pricing.evaluate.alternatives.competitors"]()}
        </div>
        <div className="flex justify-center pb-4 lg:col-span-2">
          <img
            src="/ionkolLogoNewShort.svg"
            alt="pricing"
            width={180}
            height={30}
          />
        </div>

        <div>{m["pricing.evaluate.alternatives.countries"]()}</div>
        <div>{m["pricing.evaluate.alternatives.localJointVentures"]()}</div>
        <div className="text-[#EE7380] font-bold lg:col-span-2">
          {m["pricing.evaluate.alternatives.presence"]()}
        </div>

        <div>{m["pricing.evaluate.alternatives.parameters"]()}</div>
        <div>{m["pricing.evaluate.alternatives.basicParameters"]()}</div>
        <div className="text-[#EE7380] font-bold lg:col-span-2">
          {m["pricing.evaluate.alternatives.advancedParameters"]()}
        </div>

        <div>{m["pricing.evaluate.alternatives.cost"]()}</div>
        <div>{m["pricing.evaluate.alternatives.competitorCost"]()}</div>
        <div className="text-[#EE7380] font-bold lg:col-span-2">
          {m["pricing.evaluate.alternatives.ionCost"]()}
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
          {m["pricing.evaluate.tabs.manualWork"]()}
        </button>
        <button
          onClick={() => setCurrentTab(1)}
          className={`${currentTab === 1 ? "text-white bg-[#EE7380]" : "text-[#EE7380]"} relative text-xl font-semibold z-10 px-12 py-4 rounded-full transition-colors duration-200 focus:outline-none`}
        >
          {m["pricing.evaluate.tabs.alternatives"]()}
        </button>
      </div>
      {currentTab === 0 ? <ManualWorkTabContent /> : <AlternativesTabContent />}
    </div>
  );
};

export default EvaluatePriceTabs;
