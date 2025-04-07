import React, { useEffect, useState } from "react";
import type { Article } from "../../../../lib/directus";
import directus from "../../../../lib/directus";
import { readItems } from "@directus/sdk";
import { m } from "../../../paraglide/messages";

const FeaturedPost = () => {
  const [data, setData] = useState<Article | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articleInfo = await directus.request(
          readItems("articles", {
            filter: { is_featured: { _eq: "true" } },
          })
        );
        setData(articleInfo[0]);
      } catch (error) {
        console.error("Error fetching article data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-col lg:flex-row gap-16 items-center">
      {data && (
        <>
          <div className="flex flex-col max-w-[40rem] gap-6">
            <span className="text-[26px] font-semibold">
              {m["resources.featured"]()}
            </span>
            <span className="text-[42px] font-semibold">{data?.title}</span>
            <span className="text-[34px]">
              {data.description.slice(0, 20)}...
            </span>
            <a
              href={`/resources/${data.slug}`}
              className="mt-4 text-xl text-[#EE7380]"
            >
              {m["resources.featuredPost.readMore"]()}
            </a>
          </div>

          <img
            src={`https://cms.ionkol.com/assets/${data.thumbnail}`}
            width={650}
            height={450}
            alt="post"
          />
        </>
      )}
    </div>
  );
};

export default FeaturedPost;
