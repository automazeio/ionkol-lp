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
          {/* <div className="flex flex-col w-[273px] h-[248px]">
            <div className="rounded-xl w-[217px] rotate-[1.3deg] flex flex-col px-6 py-4 bg-white items-center justify-center">
                <p className="text-xs text-[#71717A]">Followers Reachable Score</p>
                <h1 className="font-bold text-normal">9,46%</h1>
            </div>
          </div> */}

          {/* <div className="w-[291px] h-[233px] relative">
            <div
              style={{ boxShadow: "0px 4px 24px 0px #CBBAB040" }}
              className="z-30 absolute left-4 top-0 w-11 h-11 flex justify-center items-center rounded-xl bg-white rotate-[4.61deg]">
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              style={{ boxShadow: "0px 4px 24px 0px #CBBAB040" }}
              className="w-[234px] bg-white h-[120px] gap-4 flex flex-row rounded-xl mt-8 ml-10 rotate-[-1.31deg] px-4 py-6">
              <div className="w-1/3">
                <img src="/girlAvatar.png" alt="user avatar" />
              </div>
              <div className="w-2/3 flex flex-col">
                <p
                  style={{
                    background:
                      "linear-gradient(119.76deg, #F05053 9.99%, #EF83A1 53.7%, #F05053 98.29%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="text-sm">
                  @ann_ole
                </p>
                <p className="text-xs">Ann Ole</p>
                <div
                  style={{
                    background:
                      "linear-gradient(119.76deg, #F05053 9.99%, #EF83A1 53.7%, #F05053 98.29%)",
                  }}
                  className="w-24 h-[30px] rounded-md mt-2 flex flex-row justify-center items-center gap-2">
                  <p className="text-white text-xs font-medium mb-[2px] font-['Urbanist']">
                    Analyze
                  </p>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3.90388 10.7321L11.2308 3.06299L9.69702 1.59759L2.37006 9.26673L3.90388 10.7321Z"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.23145 3.13147L9.76527 4.59686"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.19798 1.70033C5.20403 1.96548 5.31516 2.21737 5.50693 2.40057C5.69869 2.58378 5.95539 2.68331 6.22053 2.67726C5.95539 2.68331 5.7035 2.79444 5.52029 2.98621C5.33708 3.17797 5.23755 3.43467 5.2436 3.69981C5.23755 3.43467 5.12642 3.18278 4.93466 2.99957C4.74289 2.81636 4.4862 2.71683 4.22105 2.72288C4.4862 2.71683 4.73809 2.6057 4.92129 2.41394C5.1045 2.22217 5.20403 1.96548 5.19798 1.70033Z"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.3108 6.58498C10.3168 6.85012 10.428 7.10201 10.6197 7.28522C10.8115 7.46843 11.0682 7.56796 11.3333 7.56191C11.0682 7.56796 10.8163 7.67909 10.6331 7.87085C10.4499 8.06262 10.3503 8.31931 10.3564 8.58446C10.3503 8.31931 10.2392 8.06742 10.0475 7.88422C9.85568 7.70101 9.59899 7.60148 9.33385 7.60753C9.59899 7.60148 9.85088 7.49035 10.0341 7.29858C10.2173 7.10682 10.3168 6.85012 10.3108 6.58498Z"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-[290px] rotate-[0.79deg] mb-2">
              <div
                style={{ boxShadow: "0px 4px 24px 0px #CBBAB040" }}
                className="h-[48px] bg-white flex rounded-xl py-2 px-3">
                <div className="flex items-center justify-center bg-[#E3FEEE] text-center text-[11px] text-[#04C551] w-[89px] h-[32px] rounded-xl">
                  <p>Completed</p>
                </div>
                <div className="flex flex-row ml-6">
                  <img src="/girl-placeholder-2.png" alt="avatar" />
                  <div className="flex flex-col ml-1">
                    <p className="text-[11px] text-[#ED707E]">@nika_gohler</p>
                    <p className="text-[11px] text-[#71717A]">Nika Gøhler</p>
                  </div>
                </div>
                <div className="flex items-center justify-center ml-6">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.16382 7.68433L9.24676 7.74079"
                      stroke="#0D0C22"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.13159 10.0175L7.68635 10.0528"
                      stroke="#0D0C22"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.38038 4.08411L8.71349 4.11637C9.88005 4.1325 9.88811 3.54923 9.89618 2.96595C9.91231 1.79939 9.32904 1.79133 8.74576 1.78326L6.41265 1.751C5.82937 1.74293 5.24609 1.73486 5.22996 2.90142C5.21383 4.06797 5.79711 4.07604 6.38038 4.08411Z"
                      stroke="#0D0C22"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.89584 2.97767C11.8367 3.10952 12.8009 3.84042 12.764 6.506L12.7156 10.0057C12.6833 12.3388 12.0839 13.4973 9.16753 13.4569L5.66786 13.4085C2.75148 13.3682 2.18433 12.1936 2.2166 9.86047L2.265 6.3608C2.30178 3.70106 3.28585 2.99126 5.22962 2.91313"
                      stroke="#0D0C22"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div
                style={{ boxShadow: "0px 4px 24px 0px #CBBAB040" }}
                className="h-[48px] bg-white flex rounded-xl mt-1 py-2 px-3">
                <div className="flex items-center justify-center bg-[#E3FEEE] text-center text-[11px] text-[#04C551] w-[89px] h-[32px] rounded-xl">
                  <p>Completed</p>
                </div>
                <div className="flex flex-row ml-6">
                  <img src="/girl-placeholder-3.png" alt="avatar" />
                  <div className="flex flex-col ml-1">
                    <p className="text-[11px] text-[#ED707E]">@care_palma</p>
                    <p className="text-[11px] text-[#71717A]">Caroline</p>
                  </div>
                </div>
                <div className="flex items-center justify-center ml-6">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.16382 7.68433L9.24676 7.74079"
                      stroke="#0D0C22"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.13159 10.0175L7.68635 10.0528"
                      stroke="#0D0C22"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.38038 4.08411L8.71349 4.11637C9.88005 4.1325 9.88811 3.54923 9.89618 2.96595C9.91231 1.79939 9.32904 1.79133 8.74576 1.78326L6.41265 1.751C5.82937 1.74293 5.24609 1.73486 5.22996 2.90142C5.21383 4.06797 5.79711 4.07604 6.38038 4.08411Z"
                      stroke="#0D0C22"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.89584 2.97767C11.8367 3.10952 12.8009 3.84042 12.764 6.506L12.7156 10.0057C12.6833 12.3388 12.0839 13.4973 9.16753 13.4569L5.66786 13.4085C2.75148 13.3682 2.18433 12.1936 2.2166 9.86047L2.265 6.3608C2.30178 3.70106 3.28585 2.99126 5.22962 2.91313"
                      stroke="#0D0C22"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div> */}
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
