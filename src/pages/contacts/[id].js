import Heading from "../../components/Title/Title";

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const contact = await res.json();

  if (!contact) {
    return { notFound: true };
  }
  return {
    props: { contact },
  };
};

const Contact = ({ contact }) => (
  <>
    <Heading text={contact.name} />
    <p>{"street: " + contact.address.street}</p>
  </>
);

export default Contact;
