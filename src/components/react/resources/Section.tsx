import type { Article } from "../../../../lib/directus";
import { m } from "../../../paraglide/messages.js";

type Props = {
  title: string | React.ReactElement;
  posts: Article[];
  onClick?: () => void;
};

const Section = ({ title, posts, onClick }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <span className="text-[42px] font-semibold">{title}</span>
        {onClick && (
          <button onClick={onClick} className="text-xl text-[#EE7380]">
            {m["resources.filters.seeMore"]()}
          </button>
        )}
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.map((post) => (
          <a href={`/resources/${post.slug}`} key={post.id}>
            <div key={post.id} className="flex flex-col">
              <img
                src={`https://cms.ionkol.com/assets/${post.thumbnail}`}
                width={318}
                height={218}
                alt="post"
              />
              {/* <div className="w-[318px] h-[218px] bg-[#D9D9D9]"></div> */}
              <span className="text-[26px] font-semibold mt-2">
                {post.title}
              </span>
              <span className="text-[26px]">
                {post.description.slice(0, 20)}...
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Section;
