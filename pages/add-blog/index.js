import { useRouter } from "next/router";
import BlogForm from "../../components/blogForm/BlogForm";

export default function AddBlog() {
  const router = useRouter();
  const addBlogHandler = async (data) => {
    const response = await fetch("api/new-blog", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const respnseData = await response.json();

    router.push("/");
  };

  return (
    <>
      <h1 className="text-center text-3xl font-bold">Add Blog</h1>
      <BlogForm addBlogHandler={addBlogHandler} />
    </>
  );
}
