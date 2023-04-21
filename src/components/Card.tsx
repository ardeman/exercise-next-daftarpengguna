import { UserType } from "@/types/user";
import Link from "next/link";

const Card = ({ id, name, email, phone }: UserType) => {
  return (
    <Link href={`/${id}`}>
      <div className="bg-white p-4 rounded-md shadow-sm cursor-pointer hover:shadow-xl">
        <h3 className="break-words text-xl font-medium">{name}</h3>
        <p className="break-words text-sm">{email}</p>
        <p className="break-words text-sm">{phone}</p>
      </div>
    </Link>
  );
};

export default Card;
