import Heading from "../../components/Heading";

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  if (!post) {
    return { notFound: true };
  }
  return {
    props: { post },
  };
};

const Contact = ({ post }) => (
  <>
    <Heading text={post.title} />
    <p>{post.body}</p>
  </>
);

export default Contact;
