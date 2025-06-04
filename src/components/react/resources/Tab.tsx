import React, { useEffect, useState } from "react";
import type { Article } from "../../../../lib/directus";
import directus from "../../../../lib/directus";
import { readItems } from "@directus/sdk";
import Section from "./Section";
import ResearchFilters from "./ResearchFilters";
import Pagination from "./Pagination";
import { m } from "../../../paraglide/messages.js";

type Props = {
  postType: "all" | "101" | "research" | "updates";
  setCurrentTab: (tab: number) => void;
};

type Filters = {
  postType: string;
  location: string;
  interest: string;
};

const PAGE_SIZE = 12;

const Tab = ({ postType, setCurrentTab }: Props) => {
  const [data, setData] = useState<Article[]>([]);
  const [filters, setFilters] = useState<Filters>({
    postType: "all",
    location: "all",
    interest: "all",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleFilterChange = (newFilters: Filters) => setFilters(newFilters);

  const getTabContent = () => {
    if (postType === "all")
      return (
        <div className="flex flex-col gap-8">
          <Section
            posts={data.filter((article) => article.category === "101")}
            title={
              <div className="flex flex-row gap-2">
                <div className="w-[125px] h-[45px] lg:w-[192px] lg:h-[58px]">
                  <img
                    src="/ionkolLogoNewShort.svg"
                    alt="pricing"
                    width={188}
                    height={50}
                    className="object-contain w-full h-full"
                  />
                </div>
                <span className="text-[#EE7380]">101</span>
              </div>
            }
            onClick={() => {
              setCurrentTab(1);
              setCurrentPage(1);
            }}
          />
          <Section
            posts={data.filter((article) => article.category === "research")}
            title={m["resources.tabs.research"]()}
            onClick={() => {
              setCurrentTab(2);
              setCurrentPage(1);
            }}
          />
          <Section
            posts={data.filter((article) => article.category === "updates")}
            title={m["resources.tabs.ionUpdates"]()}
            onClick={() => {
              setCurrentTab(3);
              setCurrentPage(1);
            }}
          />
        </div>
      );

    if (postType === "101")
      return <Section title={m["resources.tabs.ionkol101"]()} posts={data} />;

    if (postType === "research")
      return (
        <div className="flex flex-col">
          <ResearchFilters
            onFilterChange={handleFilterChange}
            filters={filters}
          />
          <Section title={m["resources.tabs.research"]()} posts={data} />
        </div>
      );

    if (postType === "updates")
      return <Section title={m["resources.tabs.ionUpdates"]()} posts={data} />;
  };

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      let articles: Article[] = [];
      const filter: any = {};
      try {
        if (postType === "research") {
          if (filters.postType !== "all")
            filter.post_type = { _eq: filters.postType };
          if (filters.location !== "all")
            filter.location = { _eq: filters.location };
          if (filters.interest !== "all")
            filter.interest = { _eq: filters.interest };
        }
        if (postType === "all") {
          const articles101 = await directus.request(
            readItems("articles", {
              filter: { category: { _eq: "101" } },
              limit: 4,
            })
          );

          const articlesResearch = await directus.request(
            readItems("articles", {
              filter: { category: { _eq: "research" } },
              limit: 4,
            })
          );

          const articlesUpdates = await directus.request(
            readItems("articles", {
              filter: { category: { _eq: "updates" } },
              limit: 4,
            })
          );

          articles = [...articles101, ...articlesResearch, ...articlesUpdates];
        } else {
          articles = await directus.request(
            readItems("articles", {
              filter: { ...filter, category: { _eq: postType } },
              limit: PAGE_SIZE,
              page: currentPage,
            })
          );
        }

        setData([...articles, ...articles, ...articles, ...articles]); // Duplicate data for testing pagination
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    }

    fetchData();
  }, [filters, currentPage, postType]);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col">
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#EE7380]"></div>
        </div>
      ) : (
        <>
          <div className="w-full">{getTabContent()}</div>
        </>
      )}
      {postType !== "all" && (
        <Pagination
          limit={PAGE_SIZE}
          currentPage={currentPage}
          setCurrentPage={handleChangePage}
          filters={filters}
          category={postType}
        />
      )}
    </div>
  );
};

export default Tab;
