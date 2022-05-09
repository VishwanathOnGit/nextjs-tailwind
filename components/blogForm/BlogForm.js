import { useRef } from "react";

const BlogForm = (props) => {
  const { addBlogHandler } = props;
  const titleRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  const detailsRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const formData = {
      title: titleRef.current.value,
      image: imageRef.current.value,
      description: descriptionRef.current.value,
      details: detailsRef.current.value,
    };

    addBlogHandler(formData);
  };

  return (
    <form className="max-w-lg w-full mx-auto my-9" onSubmit={formSubmitHandler}>
      <div className="flex flex-wrap mb-6 mx-3">
        <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
          Title
        </label>
        <input
          className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 rounded focus:outline-none focus:bg-white"
          type="text"
          placeholder="Title"
          ref={titleRef}
        />
      </div>
      <div className="flex flex-wrap mb-6 mx-3">
        <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
          Image
        </label>
        <input
          className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 rounded focus:outline-none focus:bg-white"
          type="text"
          placeholder="Image"
          ref={imageRef}
        />
      </div>
      <div className="flex flex-wrap mb-6 mx-3">
        <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
          Description
        </label>
        <input
          className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 rounded focus:outline-none focus:bg-white"
          type="text"
          placeholder="Description"
          ref={descriptionRef}
        />
      </div>
      <div className="flex flex-wrap mb-6 mx-3">
        <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
          Details
        </label>
        <input
          className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 rounded focus:outline-none focus:bg-white"
          type="text"
          placeholder="Details"
          ref={detailsRef}
        />
      </div>
      <div className="text-center mb-5">
        <button
          type="submit"
          className="px-4 py-2 font-semibold text-red-700 bg-transparent border border-red-500 rounded hover:bg-red-700 hover:text-white hover:border-transparent"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default BlogForm;
