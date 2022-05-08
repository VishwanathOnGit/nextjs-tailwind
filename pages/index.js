import { Fragment } from "react";
import BlogItem from "../components/BlogItem/BlogItem";

const BLOG_PAGE = [
  {
    id: 1,
    slug: "first-blog",
    title: "First Blog",
    image:
      "https://images.pexels.com/photos/10089714/pexels-photo-10089714.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "This is my first blog",
    details: "Starting my first blog...",
  },
  {
    id: 2,
    slug: "second-blog",
    title: "Second Blog",
    image:
      "https://images.pexels.com/photos/4397920/pexels-photo-4397920.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "This is my second blog",
    details: "Starting my second blog...",
  },
];

export default function Home() {
  return (
    <Fragment>
      <h1 className="text-center text-3xl font-bold">Blog Page</h1>
      <div>
        {BLOG_PAGE.map((blog) => (
          <div key={blog.id} className="flex flex-col">
            <BlogItem
              title={blog.title}
              image={blog.image}
              description={blog.description}
              details={blog.details}
              slug={blog.slug}
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
}
