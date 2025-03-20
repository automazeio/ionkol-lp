import { useState } from "react";
import Section from "./Section";

const posts = [
  {
    id: 1,
    title: "Title",
    description: "Subtitle",
    slug: "dfdf",
    body: "dfdsf",
  },
  {
    id: 2,
    title: "Title",
    description: "Subtitle",
    slug: "dfdf",
    body: "dfdsf",
  },
  {
    id: 3,
    title: "Title",
    description: "Subtitle",
    slug: "dfdf",
    body: "dfdsf",
  },
  {
    id: 4,
    title: "Title",
    description: "Subtitle",
    slug: "dfdf",
    body: "dfdsf",
  },
];

const tabs = [
  {
    id: 0,
    title: "All posts",
    body: (
      <div className="flex flex-col gap-8">
        <Section title="IONKOL 101" posts={posts} />
        <Section title="Research" posts={posts} />
        <Section title="ION Updates" posts={posts} />
      </div>
    ),
  },
  {
    id: 1,
    title: "IONKOL 101",
    body: <Section title="IONKOL 101" posts={posts} />,
  },
  {
    id: 2,
    title: "Research",
    body: <Section title="Research" posts={posts} />,
  },
  {
    id: 3,
    title: "ION Updates",
    body: <Section title="ION Updates" posts={posts} />,
  },
];

const ResourcesTabs = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  return (
    <div className="flex flex-col items-center gap-24">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 bg-transparent rounded-full p-[2px]">
        {tabs.map((tab) => (
          <button
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
