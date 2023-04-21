import { useQuery } from "react-query";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { UserType } from "@/types/user";
import Switcher from "@/components/Switcher";
import Card from "@/components/Card";
import Spinner from "@/components/Spinner";
import Head from "next/head";

export default function UserList() {
  const title = "Daftar Pengguna";
  const [view, setView] = useState<"list" | "grid">("list"); // default view is list
  const { isLoading, error, data } = useQuery<UserType[]>("users", () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data)
  );

  return (
    <div className="container px-2 md:px-0 mx-auto py-16 min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <div className="grid gap-8">
        <h1 className="text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {error ? (
          <p className="text-center">
            An error has occurred: {(error as AxiosError).message}
          </p>
        ) : isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className="flex justify-center">
              <Switcher view={view} setView={setView} />
            </div>
            <div
              className={`${
                view === "list"
                  ? "flex flex-col"
                  : "grid grid-cols-2 md:grid-cols-3"
              } gap-4`}
            >
              {data?.map((user) => (
                <Card
                  key={user.id}
                  id={user.id}
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
