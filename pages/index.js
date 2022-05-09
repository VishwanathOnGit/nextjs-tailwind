import { MongoClient } from "mongodb";
import { Fragment } from "react";
import BlogItem from "../components/blogItem/BlogItem";

export default function Home(props) {
  return (
    <Fragment>
      <h1 className="text-center text-3xl font-bold">Blog Page</h1>
      <div>
        {props.blogPosts.map((blog) => (
          <div key={blog.id} className="flex flex-col">
            <BlogItem
              title={blog.title}
              image={blog.image}
              description={blog.description}
              slug={blog.slug}
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://admin:admin@cluster0.fn0je.mongodb.net/nextjs-tailwind?retryWrites=true&w=majority"
  );

  const blogPostsCollection = client.db().collection("posts");
  const blogPosts = await blogPostsCollection.find().toArray();

  client.close();

  return {
    props: {
      blogPosts: blogPosts.map((blog) => ({
        title: blog.title,
        id: blog._id.toString(),
        image: blog.image,
        description: blog.description,
        details: blog.details,
        slug: blog.slug,
      })),
    },
    revalidate: 3600,
  };
}
