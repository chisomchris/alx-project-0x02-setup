import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border p-2 rounded max-w-3xl">
      <h2 className="font-medium capitalize">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
