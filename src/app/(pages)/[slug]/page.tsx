import { PostBySlug } from "@/components/posts/PostBySlug";

const BlogPost = ({ params }: { params: { slug: string } }) => {
  return <PostBySlug slug={params?.slug} />;
};

export default BlogPost;
