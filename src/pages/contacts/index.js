import Heading from "../../components/Title/Title";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  if (!data) {
    return { notFound: true }; //переведет на 404 если не валидные данные
  }

  return { props: { contacts: data } };
};

const Contacts = ({ contacts }) => (
  <>
    <Heading text="Contacts" />
    <Heading teg="h3" text="Contacts list:" />
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Link href={`/contacts/${contact.id}`}>{contact.name}</Link>
        </li>
      ))}
    </ul>
  </>
);

export default Contacts;
