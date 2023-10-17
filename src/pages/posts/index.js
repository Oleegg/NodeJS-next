// import Heading from "../../components/Heading";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  if (!posts) {
    return { notFound: true }; //переведет на 404 если не валидные данные
  }

  return { props: { posts } };
};

const Posts = ({ posts }) => (
  <>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <b>{`${post.id}. `}</b>
          <Link href={`posts/${post.id.toString()}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </>
);

export default Posts;
