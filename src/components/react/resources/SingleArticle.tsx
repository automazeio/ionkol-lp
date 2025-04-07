import { useEffect, useState } from "react";
import directus, { type Article } from "../../../../lib/directus";
import { readItems } from "@directus/sdk";

type Props = {
  slug: string;
};

const SingleArticle = ({ slug }: Props) => {
  const [data, setData] = useState<Article | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articleInfo = await directus.request(
          readItems("articles", {
            filter: { slug: { _eq: slug } },
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
    <div>
      {data && (
        <div className="flex flex-col gap-10 w-full lg:w-[45rem]">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="w-full h-[20rem] object-cover rounded-lg"
          />
          <h1 className="text-3xl font-semibold">{data.title}</h1>
          <p className="text-lg">{data.description}</p>
          <div
            className="prose prose-lg max-w-none text-black"
            dangerouslySetInnerHTML={{ __html: data.body }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default SingleArticle;
