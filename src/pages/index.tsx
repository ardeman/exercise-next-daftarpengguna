import { useQuery } from "react-query";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { UserType } from "@/types/user";
import Switcher from "@/components/Switcher";
import Card from "@/components/Card";
import Spinner from "@/components/Spinner";

export default function Home() {
  const [view, setView] = useState<"list" | "grid">("list"); // default view is list
  const { isLoading, error, data } = useQuery<UserType[]>("users", () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data)
  );

  if (error)
    return <p>An error has occurred: {(error as AxiosError).message}</p>;

  return (
    <div className="container mx-auto py-16 min-h-screen">
      <div className="grid gap-8">
        <h1 className="text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Daftar Pengguna
        </h1>
        {isLoading ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : (
          <>
            <div className="flex justify-center">
              <Switcher view={view} setView={setView} />
            </div>
            <div
              className={`${
                view === "list" ? "flex flex-col" : "grid grid-cols-3"
              } gap-4`}
            >
              {data?.map((user) => (
                <Card
                  key={user.id}
                  name={user.name}
                  email={user.email}
                  phone={user.phone}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
