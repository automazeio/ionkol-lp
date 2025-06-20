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
        <span className="text-[30px] lg:text-[42px] font-semibold">
          {title}
        </span>
        {onClick && (
          <button onClick={onClick} className="text-xl text-[#EE7380]">
            {m["resources.filters.seeMore"]()}
          </button>
        )}
      </div>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
        {posts.map((post) => (
          <a href={`/resources/${post.slug}`} key={post.id}>
            <div key={post.id} className="flex flex-col gap-2">
              <div className="w-[140px] h-[96px] md:w-[200px] md:h-[138px] lg:w-[318px] lg:h-[218px]">
                <img
                  src={`https://cms.ionkol.com/assets/${post.thumbnail}`}
                  width={318}
                  height={218}
                  className="object-cover w-full h-full"
                  alt="post"
                />
              </div>

              {/* <div className="w-[318px] h-[218px] bg-[#D9D9D9]"></div> */}
              <span className="text-sm md:text-lg lg:text-2xl font-semibold mt-2">
                {post.title}
              </span>
              <span className="text-sm md:text-lg lg:text-2xl">
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
