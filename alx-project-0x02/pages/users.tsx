import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
import { fetchData } from "@/utils/api";
import { GetStaticProps, InferGetServerSidePropsType } from "next";

const Users: React.FC<InferGetServerSidePropsType<typeof getStaticProps>> = ({
  users,
}) => {
  return (
    <>
      <h1 className="font-bold text-xl">Users Page</h1>
      <ul className="grid gap-4 py-4">
        {users.map((user) => (
          <li key={user.id}>
            <UserCard
              id={user.id}
              username={user.username}
              email={user.email}
              phone={user.phone}
              name={user.name}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;

export const getStaticProps = (async () => {
  const users = await fetchData<UserProps[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return { props: { users } };
}) satisfies GetStaticProps<{ users: UserProps[] }>;
