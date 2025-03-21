import { useEffect, useState } from "react";
import Section from "./Section";
import type { Article } from "../../../../lib/directus";
import directus from "../../../../lib/directus";
import { readItems } from "@directus/sdk";

const ResourcesTabs = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [data, setData] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const articles = await directus.request(readItems("articles"));
        setData(articles);
      } catch (error) {
        console.error("Error fetching price cards:", error);
      }
    }
    fetchData();
  }, []);

  const tabs = [
    {
      id: 0,
      title: "All posts",
      body: (
        <div className="flex flex-col gap-8">
          <Section
            title={
              <div className="flex flex-row gap-2">
                <img
                  src="/ionkolLogoNewShort.svg"
                  alt="pricing"
                  width={188}
                  height={50}
                />
                <span className="text-[#EE7380]">101</span>
              </div>
            }
            posts={data}
            onClick={() => setCurrentTab(1)}
          />
          <Section
            title="Research"
            posts={data}
            onClick={() => setCurrentTab(2)}
          />
          <Section
            title="ION Updates"
            posts={data}
            onClick={() => setCurrentTab(3)}
          />
        </div>
      ),
    },
    {
      id: 1,
      title: "IONKOL 101",
      body: (
        <Section
          title={
            <div className="flex flex-row gap-2">
              <img
                src="/ionkolLogoNewShort.svg"
                alt="pricing"
                width={188}
                height={50}
              />
              <span className="text-[#EE7380]">101</span>
            </div>
          }
          posts={data}
        />
      ),
    },
    {
      id: 2,
      title: "Research",
      body: <Section title="Research" posts={data} />,
    },
    {
      id: 3,
      title: "ION Updates",
      body: <Section title="ION Updates" posts={data} />,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-24">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 bg-transparent rounded-full p-[2px]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setCurrentTab(tab.id)}
            className={`${currentTab === tab.id ? "text-white bg-[#EE7380]" : "text-[#EE7380] border-[#FFA2AC]"}  border-[1px] relative text-xl font-semibold z-10 px-8 py-4 rounded-full transition-colors duration-200 focus:outline-none`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {tabs[currentTab].body}
    </div>
  );
};

export default ResourcesTabs;
