import { useRouter } from "next/router";

const BlogItem = (props) => {
  const { title, image, description, slug } = props;

  const router = useRouter();

  const onNavigate = () => router.push(`/${slug}`);

  return (
    <div className="max-w-sm mx-auto overflow-hidden rounded shadow-lg my-4">
      <img className="w-full h-60" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-base text-gray-700">{description}</p>
      </div>
      <div className="text-center mb-5">
        <button
          onClick={onNavigate}
          className="px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-700 hover:text-white hover:border-transparent"
        >
          Read More...
        </button>
      </div>
    </div>
  );
};

export default BlogItem;
