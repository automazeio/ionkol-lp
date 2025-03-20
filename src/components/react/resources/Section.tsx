import type { Article } from "../../../../lib/directus";

type Props = {
  title: string;
  posts: Article[];
};

const Section = ({ title, posts }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <span className="text-[42px] font-semibold">{title}</span>
        <span className="text-xl">See more +</span>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.map((post) => (
          <div key={post.id} className="flex flex-col">
            <div className="w-[318px] h-[218px] bg-[#D9D9D9]"></div>
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
