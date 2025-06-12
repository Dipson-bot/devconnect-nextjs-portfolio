import { useRouter } from "next/router";
import posts from "../../data/blogposts";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <p className="text-center mt-10 text-red-600 font-semibold">
        Post not found.
      </p>
    );
  }

  return (
    <article className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">{post.title}</h1>
      <p className="text-lg text-gray-700 leading-relaxed">{post.content}</p>
    </article>
  );
}
