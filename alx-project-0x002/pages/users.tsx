import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
import { fetchData } from "@/utils/api";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  console.log(users)
  useEffect(() => {
    fetchData<UserProps[]>("https://jsonplaceholder.typicode.com/users").then(
      (data) => setUsers(data)
    );
  }, []);
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
