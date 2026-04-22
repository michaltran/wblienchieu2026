import HealthPostCard from "./HealthPostCard";
import type { HealthPost } from "../../data/healthPosts";

interface Props {
  posts: HealthPost[];
}

export default function HealthPostGrid({ posts }: Props) {
  if (posts.length === 0) {
      return (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
              <p className="text-slate-500">Không tìm thấy bài viết nào phù hợp.</p>
          </div>
      );
  }

  return (
    <div className="grid sm:grid-cols-2 gap-6">
        {posts.map((post) => (
            <HealthPostCard key={post.slug} post={post} />
        ))}
    </div>
  );
}
