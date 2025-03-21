import type { Article } from "../../../../lib/directus";

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
            See more +
          </button>
        )}
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.map((post) => (
          <div key={post.id} className="flex flex-col">
            <img
              // src={`https://cms.ionkol.com/assets/${post.thumbnail}`}
              src="https://cms.ionkol.com/assets/c47d2d60-f373-413b-ad74-3c62838350f1"
              width={318}
              height={218}
              alt="post"
            />
            {/* <div className="w-[318px] h-[218px] bg-[#D9D9D9]"></div> */}
            <span className="text-[26px] font-semibold mt-2">{post.title}</span>
            <span className="text-[26px]">
              {post.description.slice(0, 20)}...
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
