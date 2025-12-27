import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = (user) => {
  return (
    <div className="border p-2 rounded">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.username}</p>
      <p>{user.phone}</p>
    </div>
  );
};

export default UserCard;
