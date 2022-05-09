import { MongoClient } from "mongodb";
import Link from "next/link";
import { useRouter } from "next/router";
import BlogItem from "../../components/blogItem/BlogItem";

export default function BlogDetails(props) {
  const {
    blog: { title, image, description, details, slug },
  } = props;
  const router = useRouter();
  return (
    <>
      <BlogItem
        title={title}
        image={image}
        description={description}
        details={details}
        slug={slug}
      />
      {/* <Link href="/">Back to home</Link> */}
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://admin:admin@cluster0.fn0je.mongodb.net/nextjs-tailwind?retryWrites=true&w=majority"
  );

  const blogPostsCollection = client.db().collection("posts");
  const blogPosts = await blogPostsCollection.find({}, { slug: 1 }).toArray();

  client.close();

  return {
    paths: blogPosts.map((slug) => ({
      params: slug,
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const blogID = context.params.slug;
  const client = await MongoClient.connect(
    "mongodb+srv://admin:admin@cluster0.fn0je.mongodb.net/nextjs-tailwind?retryWrites=true&w=majority"
  );

  const blogPostsCollection = client.db().collection("posts");
  const blogPosts = await blogPostsCollection.findOne({ slug: blogID });

  client.close();

  return {
    props: {
      blog: {
        title: blogPosts.title,
        id: blogPosts._id.toString(),
        image: blogPosts.image,
        description: blogPosts.description,
        details: blogPosts.details,
        slug: blogPosts.slug,
      },
    },
  };
}
