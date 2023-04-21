import { UserType } from "@/types/user";

const Card = ({name, email, phone}: UserType) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
};

export default Card;
