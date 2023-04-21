import { UserType } from "@/types/user";

const Card = ({name, email, phone}: UserType) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="break-words text-xl font-medium">{name}</h3>
      <p className="break-words text-sm">{email}</p>
      <p className="break-words text-sm">{phone}</p>
    </div>
  );
};

export default Card;
