import { useRouter } from "next/router";

export const EditPost = () => {
  const { query } = useRouter();

  console.log("esto vale query ", query);
  return <h1>Edit post</h1>;
};
export default EditPost;
