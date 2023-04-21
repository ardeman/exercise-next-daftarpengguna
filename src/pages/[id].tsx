import Spinner from "@/components/Spinner";
import { UserDetailProps, UserDetailType } from "@/types/user";
import axios, { AxiosError } from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const UserDetail = ({ id }: UserDetailProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const { error, data, refetch } = useQuery<UserDetailType>("user", () =>
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.data)
  );

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await refetch();
      setLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="container px-2 md:px-0 mx-auto py-16 min-h-screen">
      <Head>
        <title>{data?.name}</title>
      </Head>
      <div className="grid gap-8">
        <h1 className="text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Detail Pengguna
        </h1>
        <button
          className={`inline-flex w-fit items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-full px-4 py-2 bg-white`}
          onClick={() => router.back()}
        >
          Back
        </button>
        <div className="bg-white p-4 rounded-md shadow-2xl">
          {error ? (
            <p className="text-center">
              An error has occurred: {(error as AxiosError).message}
            </p>
          ) : loading ? (
            <Spinner />
          ) : (
            <>
              <h3 className="break-words text-xl font-medium">
                {data?.name} {data?.username ? `(${data.username})` : ""}
              </h3>
              <p className="break-words text-sm">{data?.email}</p>
              <p className="break-words text-sm">{data?.phone}</p>
              <p className="break-words text-sm">{data?.website}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  return {
    props: { id }, // will be passed to the page component as props
  };
};

export default UserDetail;
